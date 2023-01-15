import { v4 as uuidv4 } from "uuid";
import path from "path";
import jsonfile from "jsonfile";

const FILE_PATH = path.join(process.cwd(), "src", "data", "messages.json");

export class Message {
  id: string;
  text: string;
  user: string;
  added: Date;
  constructor(text: string, user: string) {
    this.id = uuidv4();
    this.text = text;
    this.user = user;
    this.added = new Date();
  }

  async save() {
    try {
      const messagesFile = await jsonfile.readFileSync(FILE_PATH);
      jsonfile.writeFile(FILE_PATH, {
        messages: [...messagesFile.messages, this],
      });
    } catch (error: any) {
      if (error.code === "ENOENT") {
        jsonfile.writeFile(FILE_PATH, {
          messages: [this],
        });
      } else {
        console.log(error);
      }
    }
  }

  static async getMessages() {
    try {
      const messagesFile = await jsonfile.readFileSync(FILE_PATH);
      return messagesFile.messages;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
