import { config } from "dotenv";

config();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

export { port, host };
