import express from "express";
import {
  changePassword,
  forgotPassword,
  loginUser,
  logout,
  registerUser,
  verification,
  verifyOTP,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { registerSchema } from "../validators/auth/registerSchema.js";
import { loginSchema } from "../validators/auth/loginSchema.js";
import { forgotPasswordSchema } from "../validators/auth/forgotPasswordSchema.js";
import { verifyOtpSchema } from "../validators/auth/verifyOtpSchema.js";
import { changePasswordSchema } from "../validators/auth/changePasswordSchema.js";
import { emailParamsSchema } from "../validators/common/paramSchema.js";
import { validateBody, validateParams } from "../middleware/validate.js";

const router = express.Router();

router.post("/register", validateBody(registerSchema), registerUser);
router.post("/verify", verification); // This route don't need any validation because joi only check 3 things req.body req.params req.query & thats all are not in this controller
router.post("/login", validateBody(loginSchema), loginUser);
router.post("/logout", isAuthenticated, logout);
router.post(
  "/forgot-password",
  validateBody(forgotPasswordSchema),
  forgotPassword
);
router.post(
  "/verify-otp/:email",
  validateParams(emailParamsSchema),
  validateBody(verifyOtpSchema),
  verifyOTP
);
router.post(
  "/change-password/:email",
  validateParams(emailParamsSchema),
  validateBody(changePasswordSchema),
  changePassword
);

export default router;
