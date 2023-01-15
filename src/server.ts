import express from "express";
import path from "path";

import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
