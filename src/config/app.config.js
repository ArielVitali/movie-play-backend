import { config } from "dotenv";

config();

const port = process.env.PORT || 3000;

export { port };