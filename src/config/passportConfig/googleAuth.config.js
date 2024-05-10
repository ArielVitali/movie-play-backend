import { config } from "dotenv";

config();

const clientID_google = process.env.GOOGLE_CLIENT_ID;
const clientSecret_google = process.env.GOOGLE_CLIENT_SECRET;

export { clientID_google, clientSecret_google };
