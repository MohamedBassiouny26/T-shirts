const mongoose = require('mongoose');

const BatchSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    size: { type: String, enum: ["S", "M", "L", "XL"], required: true },
    color: { type: String, enum: ["red", "blue", "black", "green"], required: true },
    quantity: { type: Number, required: true }
})

const BatchModel = mongoose.model('Batch', BatchSchema);
module.exports = BatchModel;