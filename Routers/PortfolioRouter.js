const express = require('express');
const { serveFile, getStats, registerQuery } = require('../Controllers/PortfolioController');

const PortfolioRouter = express.Router();


// Create JWT
PortfolioRouter
.route('/')
.get(serveFile)

PortfolioRouter
.route('/stats')
.get(getStats)

PortfolioRouter
.route('/query-submit')
.post(registerQuery)





module.exports=PortfolioRouter;