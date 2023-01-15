import express from "express";
import path from "path";

import routes from "./routes";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
