const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

// const userR = require('./userRouter')
// const adminR = require('./adminRouter')
const port = 4000;
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users = [
  {
    srNo : 1,
    name : "Ankush",
    surname : "Kawde"
  },
  {
    srNo : 2,
    name : "Akanksha",
    surname : "Kawde"
  },
  {
    srNo : 3,
    name : "Ashwini",
    surname : "Kawde"
  },
  {
    srNo : 4,
    name : "Kamal",
    surname : "Kawde"
  },
  {
    srNo : 5,
    name : "Rajendra",
    surname : "Kawde"
  }
]

app.listen(port, () => {
  console.log("Listening on Port ", port);
});
