import express from "express";
import { router } from "./routes";
const app = express();

const port = 3000;

app.use("/server", router);

app.listen(port, () => console.log(`Запущен сервер на порту ${port}`));
