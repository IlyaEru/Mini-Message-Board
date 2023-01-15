import express from "express";
import messageRoutes from "../components/message";

const router = express.Router();

router.use("/", messageRoutes);

export default router;
