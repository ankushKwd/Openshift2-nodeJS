const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Conn = require("./db");
const bookRoutes = require("./bookRoutes");
const userRoutes = require("./userRoutes");

const app = express();
const port = process.env.PORT || 3000;

mongoose.set("strictQuery", true);
const router = express.Router();
app.use(router);
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);

Conn()
  .then(() => console.log("Connected Successfully...!!!"))
  .catch((err) => console.log(err));

router.use("/", (req, res) => {
  req.log.info({ message: "Hello from Node.js Starter Application!" });
  res.send("Connected on Root Route");
});

// See: http://expressjs.com/en/4x/api.html#app.settings.table
const PRODUCTION = app.get("env") === "production";

// Administrative routes are not timed or logged, but for non-admin routes, pino
// overhead is included in timing.
app.get("/ready", (req, res) => res.status(200).json({ status: "ok" }));
app.get("/live", (req, res) => res.status(200).json({ status: "ok" }));
app.get("/metrics", async (req, res, next) => {
  const metrics = await Prometheus.register.metrics();
  res.set("Content-Type", Prometheus.register.contentType);
  res.end(metrics);
});

// Time routes after here.
app.use(requestTimer);

// Log routes after here.
const pino = require("pino")({
  level: PRODUCTION ? "info" : "debug",
});
app.use(require("pino-http")({ logger: pino }));

router.get("/api/getUsers", userRoutes.getUsers);
router.post("/api/createUser", userRoutes.createUser);

router.get("/api/getBooks", bookRoutes.getBooks);
router.post("/api/createBook", bookRoutes.createBook);
router.put("/api/updateBook", bookRoutes.updateBook);
router.delete("/api/deleteBook", bookRoutes.deleteBook);

router.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

server.listen(port, () => {
  console.log("Listening on port", port);
});
