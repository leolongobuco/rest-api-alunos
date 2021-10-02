import { Router } from "express";
import userController from "../controllers/UserController";
import logRequests from "../middlewares/logRequests";

const router = new Router();

router.use(logRequests);

//Rotas Users
router.post("/", userController.store);

export default router;
