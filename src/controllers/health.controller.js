import RouterClass from "../router/router.class.js";

class HealthController extends RouterClass {
  init() {
    this.get("/", (req, res) => {
      res.send("healthy");
    });
  }
}

export default HealthController;
