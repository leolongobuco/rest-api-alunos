import { Router } from "express";
import fileController from "../controllers/FileController";
import logRequests from "../middlewares/logRequests";
import loginRequired from "../middlewares/loginRequired";

export const router = new Router();

router.use(logRequests);

router.post("/", loginRequired, fileController.store);

export default router;
