import { Router } from "express";
import { Controller } from "../controller";
const router = Router();

// middleware
router.use((req, res, next) => {
  console.log("запрос...");
  next();
});
router.get("/links", Controller.getLink);

router.post("/links", Controller.addLink);

export { router };
