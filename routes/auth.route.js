import { Router } from "express";
import { Me, login, logout } from "../controllers/auth.controller.js";
const router = Router();

router.get("/me", Me);
router.post("/login", login);
router.delete("/logout", logout);

export default router;
