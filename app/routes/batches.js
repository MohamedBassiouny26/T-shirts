const express = require('express');
const { models } = require('mongoose');
const BatchRouter = express.Router();
const BatchController = require('../controller/batches')

BatchRouter.post('/', BatchController.addBatch)
BatchRouter.get('/', BatchController.getBatches)

module.exports = BatchRouter;