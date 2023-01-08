const mongoose = require("mongoose");
function Conn () {
    const mongoDB = "mongodb+srv://ankukwd_mongo:<password>@cluster0.6pc8mon.mongodb.net/?retryWrites=true&w=majority";
    return mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
}
module.exports = Conn;