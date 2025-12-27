import express from "express";
import {
  loginUser,
  registerUser,
  verification,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/verify", verification);
router.post("/verify", loginUser);

export default router;
