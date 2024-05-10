import RouterClass from "../router/router.class.js";

class HealthController extends RouterClass {
  init() {
    this.get("/", ["PUBLIC"], (req, res) => {
      try {
        res.sendSuccess("healthy");
      } catch (error) {
        res.sendServerError(error);
      }
    });
  }
}

export default HealthController;
