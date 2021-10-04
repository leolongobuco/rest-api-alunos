import { Router } from "express";
import alunoController from "../controllers/AlunoController";
import logRequests from "../middlewares/logRequests";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.use(logRequests);

router.post("/", loginRequired, alunoController.store);
router.get("/", alunoController.index);
router.get("/:userId", alunoController.show);
router.put("/:userId", loginRequired, alunoController.update);
router.delete("/:userId", loginRequired, alunoController.delete);

export default router;
