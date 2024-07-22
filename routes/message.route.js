import { Router } from "express";
import {
  getMessages,
  createMessage,
} from "../controllers/message.controller.js";
import { verifyUser } from "../middleware/AuthUser.js";
const router = Router();

router.get("/", verifyUser, getMessages);
router.post("/", verifyUser, createMessage);

export default router;
