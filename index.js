const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Conn = require("./db");
const bookRoutes = require("./bookRoutes");
const userRoutes = require("./userRoutes");

const app = express();
const port = 7000;

mongoose.set("strictQuery", true);
const router = express.Router();
app.use(router);
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

Conn()
  .then(() => console.log("Connected Successfully...!!!"))
  .catch((err) => console.log(err));

router.use("/", (req, res) => {
  res.send("Connected on Root Route");
});

router.get("/api/getUsers", userRoutes.getUsers);
router.post("/api/createUser", userRoutes.createUser);

router.get("/api/getBooks", bookRoutes.getBooks);
router.post("/api/createBook", bookRoutes.createBook),
  router.put("/api/updateBook", bookRoutes.updateBook),
  router.delete("/api/deleteBook", bookRoutes.deleteBook);

app.listen(port, () => {
  console.log("Listening on port", port);
});
