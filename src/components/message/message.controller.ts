import { Message } from "./message.model";
import { Request, Response } from "express";

const getMessagesPage = async (req: Request, res: Response) => {
  const messages = await Message.getMessages();
  res.render("index", {
    messages,
    pageTitle: "Mini Messageboard",
    path: req.url,
  });
};

const getNewMessagePage = (req: Request, res: Response) => {
  res.render("newMessage", { pageTitle: "New Message", path: req.url });
};

const addMessage = async (req: Request, res: Response) => {
  const { text, user } = req.body;
  if (!text || !user) {
    res.status(400).json({ message: "Missing text or user" });
    return;
  }
  const message = new Message(text, user);
  message.save();
  res.status(201).redirect("/");
};

export { getMessagesPage, addMessage, getNewMessagePage };
