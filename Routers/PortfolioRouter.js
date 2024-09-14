const express = require('express');
const { serveFile, getStats } = require('../Controllers/PortfolioController');

const PortfolioRouter = express.Router();


// Create JWT
PortfolioRouter
.route('/')
.get(serveFile)

PortfolioRouter
.route('/stats')
.get(getStats)





module.exports=PortfolioRouter;