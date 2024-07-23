import { Router } from "express";
import {
  getMessages,
  createMessage,
} from "../controllers/message.controller.js";
import { verifyUser } from "../middleware/AuthUser.js";
const router = Router();

router.get("/", getMessages);
router.post("/", createMessage);

export default router;
