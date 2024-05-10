import express from "express";
import morgan from "morgan";
import handlebars from "express-handlebars";
import router from "./router/index.js";
import passportConfig from "./config/passportConfig/index.js";
import { __dirname } from "./utils.js";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static("./public"));
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", handlebars.engine());
passportConfig(app);
router(app);

export default app;
