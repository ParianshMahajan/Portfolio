const path = require("path");
const { leetCode, github } = require("../Middlewares/profileFetcher");
const QueryModel = require("../Models/QueryModel");
const { sendMail } = require("../Middlewares/NodeMailer");


module.exports.serveFile = async function serveFile(req, res) {
  try {
    const username = "parianshmahajan";
    let solvedQuestions = await leetCode(username);

    let commits =await github(username);


    res.sendFile(path.join(__dirname, "../public/index.html"));
  } catch (error) {
    res.json({
      message: error.message,
      status: false,
    });
  }
};



module.exports.getStats = async function getStats(req, res) {
  try {
    const username = "parianshmahajan";
    let solvedQuestions = await leetCode(username);
    let commits = await github(username);

    res.json({
      solvedQuestions,
      commits,
      status: true,
    });
  } catch (error) {
    res.json({
      message: error.message,
      status: false,
    });
  }
};


module.exports.registerQuery = async function registerQuery(req, res) {
  try {
    const data = req.body;
    
    await QueryModel.create(data);

    const message = `Name: ${data.Name}\nEmail: ${data.Email}\nPhone Number: ${data.PhoneNumber}\nMessage: ${data.Message}`;
    await sendMail("parianshm@gmail.com",message);
    await sendMail("pmahajan1_be22@thapar.edu",message);

    res.json({
      status: true,
      message:"Query Submitted",
    });
  } catch (error) {
    res.json({
      message: error.message,
      status: false,
    });
  }
};
