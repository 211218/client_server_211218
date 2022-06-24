import express from "express";
import cors from "cors";

import { api } from "./config/config.js";
import user from "./router/user.js";
import images from "./router/images.js"
import fathers from "./router/father.js"
import sons from "./router/sons.js"

const app = express();

app.use("/api/user", user);
app.use("/api/father", fathers);
app.use("/api/son", sons);
app.use("/api/images", images);

app.use(cors({
  origin: true, credentials: false
}));

app.listen(api.port, () => {
  console.log(`Servidor corriendo en el puerto => ${api.port}`);
});
