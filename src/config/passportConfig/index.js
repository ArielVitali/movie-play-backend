import passport from "passport";
import initializePassport from "./config.passport.js";

const passportConfig = (app) => {
  initializePassport();
  app.use(passport.initialize());
};

export default passportConfig;
