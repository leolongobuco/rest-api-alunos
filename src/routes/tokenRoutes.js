import { Router } from "express";
import tokenController from "../controllers/TokenController";
import logRequests from "../middlewares/logRequests";

const router = new Router();

router.use(logRequests);

router.post("/", tokenController.store);

export default router;
