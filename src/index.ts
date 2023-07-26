import express from "express";
import { router } from "./routes";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 8000;

app.use("/server", router);

app.listen(port, () => console.log(`Запущен сервер на порту ${port}`));


