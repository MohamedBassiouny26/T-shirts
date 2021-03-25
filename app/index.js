const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const batch = require('./routes/batches');

require("./dbConnection/mongo_connect");

app.use(express.json());

app.use("/batches", batch);

app.use((req, res, next) => {
    res.status(404).send({ message: "Not Found" });
});

app.listen(PORT, (err) => {
    if (err) console.error(err);
    console.log(`App server is running and listening on port ${PORT}`);
});