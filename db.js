const mongoose = require("mongoose");
function Conn () {
    const mongoDB = "mongodb://127.0.0.1/AkkiLearning";
    return mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
}
module.exports = Conn;