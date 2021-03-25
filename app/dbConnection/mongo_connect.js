const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1/garmentIO"

if (
    mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
) {
    console.log("Connected to DB");
}

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));