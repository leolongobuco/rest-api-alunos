import { Router } from "express";
import multer from "multer";
import fileController from "../controllers/FileController";
import logRequests from "../middlewares/logRequests";
import loginRequired from "../middlewares/loginRequired";
import multerConfig from "../config/multer";

const upload = multer(multerConfig);

const router = new Router();

router.use(logRequests);

router.post("/", upload.single("file"), fileController.store);

export default router;
