import express from "express";
import morgan from "morgan";
import router from "./router/index.js";
import passportConfig from "./config/passportConfig/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
passportConfig(app);
router(app);

export default app;
