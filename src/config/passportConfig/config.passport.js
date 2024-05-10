import passport from "passport";
import google from "passport-google-oauth20";
import { clientID_google, clientSecret_google } from "./googleAuth.config.js";
import { host, port } from "../app.config.js";

const googleStrategy = google.Strategy;

const initializePassport = () => {
  passport.use(
    "google",
    new googleStrategy(
      {
        clientID: clientID_google,
        clientSecret: clientSecret_google,
        callbackURL: `http://${host}:${port}/api/auth/google/callback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log(profile);

          //const user = await User.findOne({ googleId: profile._json.sub });

          const user = null;
          if (!user) {
            const newUserInfo = {
              googleId: profile._json.sub,
              first_name: profile._json.given_name,
              last_name: profile._json.family_name,
              age: 18,
              email: profile._json.email,
              password: "",
            };

            //const newUser = await User.create(newUserInfo);

            return done(null, newUserInfo);
          }

          done(null, user);
        } catch (error) {
          done(error);
        }
      }
    )
  );
};

export default initializePassport;
