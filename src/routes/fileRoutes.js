import { Router } from "express";
import fileController from "../controllers/FileController";
import logRequests from "../middlewares/logRequests";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.use(logRequests);

router.post("/", fileController.store);

export default router;
