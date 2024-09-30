const express = require("express");
const path = require("path");
const fs = require("fs");

const {
  getStats,
  registerQuery,
} = require("../Controllers/PortfolioController");

const PortfolioRouter = express.Router();


	PortfolioRouter
		.route("/stats")
		.get(getStats);

	PortfolioRouter
		.route("/query-submit")
		.post(registerQuery);

	PortfolioRouter
		.route("/resume")
		.get((req, res) => {
			try {
			const filePath = path.join(__dirname, "../public/Resume.pdf");
			var data =fs.readFileSync(filePath);
			res.contentType("application/pdf");
			res.send(data);
		} catch (error) {
			res.status(500).json({
			message: error.message,
			});
		}
		});

	module.exports = PortfolioRouter;
