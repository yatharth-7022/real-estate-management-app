import express from "express";
import {
  handleSignIn,
  signup,
  verifyToken,
} from "../Controllers/auth.controller.js";
import { signin } from "../Controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/user", verifyToken, handleSignIn);

export default router;
