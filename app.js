const express = require('express');
const bodyParser = require('body-parser');

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const cors = require('cors');
const path = require('path');

const db = require('./config/DatabaseConfig.js');
const PortfolioRouter = require('./Routers/PortfolioRouter.js');


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true, parameterLimit: 50000 }));

// Routes
app.use('/', PortfolioRouter);

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 2123;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
