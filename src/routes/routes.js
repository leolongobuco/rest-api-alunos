import { Router } from "express";
import alunoController from "../controllers/AlunoController";
import logRequests from "../middlewares/logRequests";

const router = new Router();

router.use(logRequests);

//Rotas Home
router.post("/", alunoController.store);

export default router;
