const path = require("path");
const { leetCode, github } = require("../Middlewares/profileFetcher");
const { sendMail } = require("../Middlewares/NodeMailer");


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
