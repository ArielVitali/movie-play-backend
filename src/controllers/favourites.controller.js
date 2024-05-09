import RouterClass from "../router/router.class.js";
import {
  getFavoritesUserById,
  deleteFavouriteByUserId,
} from "../services/favourites.service.js";

class FavouritesController extends RouterClass {
  init() {
    this.get("/:id/favourites", ["PUBLIC"], async (req, res) => {
      try {
        const id = req.params.id;
        const favorites = await getFavoritesUserById(id);
        res.sendSuccess(favorites);
      } catch (error) {
        res.sendServerError(error);
      }
    });

    this.delete("/:id/favourites", ["PUBLIC"], async (req, res) => {
      try {
        const id = req.params.id;
        const favorites = await deleteFavouriteByUserId(id);
        res.sendSuccess(favorites);
      } catch (error) {
        res.sendServerError(error);
      }
    });
  }
}

export default FavouritesController;
