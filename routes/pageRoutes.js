const express = require('express');

const portfolioController = require('../controllers/portfolioController');

const router = express.Router();

router.route('/').get(portfolioController.getPortfolio);
router.route('/add').post(portfolioController.addNewItem);
router.route('/items/:id').delete(portfolioController.deleteItem);
router.route('/items/:id').put(portfolioController.updateItem);

module.exports = router;