import RouterClass from "../router/router.class.js";

class ViewController extends RouterClass {
  init() {
    this.get("/", ["PUBLIC"], (req, res) => {
      res.render("index.handlebars");
    });
  }
}

export default ViewController;
