import RouterClass from "../router/router.class.js";
import { getMovies, getMovie } from "../services/movies.service.js";

class MoviesController extends RouterClass {
  init() {
    this.get("/", ["PUBLIC"], (req, res) => {
      try {
        const movies = getMovies();
        res.send(movies);
      } catch (error) {
        res.sendServerError(error);
      }
    });

    this.get("/:id", ["PUBLIC"], (req, res) => {
      try {
        const id = req.params.id;
        const movie = getMovie(id);
        res.send(movie);
      } catch (error) {
        res.sendServerError(error);
      }
    });
  }
}

export default MoviesController;
