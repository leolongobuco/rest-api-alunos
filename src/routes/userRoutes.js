import { Router } from "express";
import userController from "../controllers/UserController";
import logRequests from "../middlewares/logRequests";
import loginRequired from "../middlewares/loginRequired";
const router = new Router();

router.use(logRequests);

router.post("/", userController.store);
router.get("/", userController.index);
router.get("/:userId", userController.show);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;
