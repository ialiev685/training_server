import { Router } from "express";
import { Controller } from "../controller";

const router = Router();

// middleware
router.use((req, res, next) => {
  console.log("запрос...");
  next();
});
router.get("/links", Controller.getLink);

router.get("/links/:name", Controller.addLink);

router.get("/links/update/:name", Controller.updateLink);

export { router };
