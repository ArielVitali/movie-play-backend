import app from "./app.js";
import { port } from "./config/app.config.js";

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
