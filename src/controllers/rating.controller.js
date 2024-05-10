import RouterClass from "../router/router.class.js";
import { createRating } from "../store/rating.store.js";

class RatingController extends RouterClass {
  init() {
    this.post("/:mid/users/:uid/rating", ["PUBLIC"], (req, res) => {
      try {
        const mid = req.params.mid;
        const uid = req.params.uid;
        const rating = req.body.rating;
        const result = createRating(mid, uid, rating);
        res.sendSuccess(result);
      } catch (error) {
        res.sendServerError(error);
      }
    });
  }
}

export default RatingController;
