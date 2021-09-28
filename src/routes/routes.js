import { Router } from "express";
import homeController from "../controllers/HomeController";
import logRequests from "../middlewares/logRequests";

const router = new Router();

router.use(logRequests);

//Rotas Home
router.get("/", homeController.index);
router.post("/", homeController.store);

export default router;
