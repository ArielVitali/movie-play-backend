import RouterClass from "../router/router.class.js";

class AuthController extends RouterClass {
  init() {
    this.post("/login", (req, res) => {
      res.send("hello world");
    });
    this.post("/refreshToken", (req, res) => {
      res.send("hello world");
    });
    this.post("/logout", (req, res) => {
      res.send("hello world");
    });
  }
}

export default AuthController;
