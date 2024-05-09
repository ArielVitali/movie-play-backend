import RouterClass from "../router/router.class.js";

class MoviesController extends RouterClass {
  init() {
    this.get("/", ["PUBLIC"], (req, res) => {
      res.send("Hello, world!");
    });

    this.get("/:id", ["PUBLIC"], (req, res) => {
      res.send("Hello, world!");
    });

    this.post("/:id/users/:uid/rating", ["PUBLIC"], (req, res) => {});
  }
}

export default MoviesController;
