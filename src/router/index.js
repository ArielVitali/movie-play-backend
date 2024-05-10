import UsersController from "../controllers/users.controller.js";
import MoviesController from "../controllers/movies.controller.js";
import AuthController from "../controllers/auth.controller.js";
import HealthController from "../controllers/health.controller.js";
import ViewController from "../controllers/view.controller.js";

const usersController = new UsersController().getRouter();
const moviesController = new MoviesController().getRouter();
const authController = new AuthController().getRouter();
const healthController = new HealthController().getRouter();
const viewController = new ViewController().getRouter();

const router = (app) => {
  app.use("/api/users", usersController);
  app.use("/api/movies", moviesController);
  app.use("/api/auth", authController);
  app.use("/api/health", healthController);
  app.use("/api/", viewController);
};

export default router;
