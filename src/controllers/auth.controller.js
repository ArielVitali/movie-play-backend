import RouterClass from "../router/router.class.js";
import passport from "passport";

class AuthController extends RouterClass {
  init() {
    this.get(
      "/google",
      ["PUBLIC"],
      passport.authenticate(
        "google",
        { scope: ["profile"] },
        { session: false }
      )
    );

    this.get(
      "/google/callback",
      ["PUBLIC"],
      passport.authenticate("google", { session: false }),
      async (req, res) => {
        try {
          console.log(req.user);
          res.sendSuccess(req.user);
        } catch (error) {
          res.sendServerError(error);
        }
      }
    );

    this.post("/refreshToken", (req, res) => {
      res.send("hello world");
    });
    this.post("/logout", (req, res) => {
      res.send("hello world");
    });
  }
}

export default AuthController;
