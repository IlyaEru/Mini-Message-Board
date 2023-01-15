import express from "express";

import {
  getMessagesPage,
  addMessage,
  getNewMessagePage,
} from "./message.controller";

const router = express.Router();

router.get("/", getMessagesPage);

router.get("/new", getNewMessagePage);

router.post("/new", addMessage);

export default router;
