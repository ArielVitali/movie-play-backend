import RouterClass from "../router/router.class.js";
import passport from "passport";

class AuthController extends RouterClass {
  init() {
    this.get(
      "/login",
      ["PUBLIC"],
      passport.authenticate(
        "google",
        { scope: ["profile"] },
        { session: false }
      )
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
