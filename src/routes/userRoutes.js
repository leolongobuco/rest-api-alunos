import { Router } from "express";
import userController from "../controllers/UserController";
import logRequests from "../middlewares/logRequests";

const router = new Router();

router.use(logRequests);

//Rotas Users
router.post("/", userController.store);
router.get("/", userController.index);
router.get("/:userId", userController.show);
router.put("/:userId", userController.update);
router.delete("/:userId", userController.delete);

export default router;
