import express from "express";
import messageRoutes from "../components/message";

const router = express.Router();

router.use("/", messageRoutes);

router.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Page Not Found", path: req.url });
});

export default router;
