const BatchModel = require('../models/batches')

async function getBatches(req, res) {
    try {
        const batches = await BatchModel.find({})
        res.status(200).send(batches);
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function addBatch(req, res) {
    const newBatch = new BatchModel({
        id: req.body.id,
        color: req.body.color,
        size: req.body.size,
        quantity: req.body.quantity
    });
    try {
        await newBatch.save();
        res.status(200).send(`newBatch saved succeffully`);
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    getBatches,
    addBatch
}