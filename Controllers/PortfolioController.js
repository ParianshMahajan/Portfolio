const path = require("path");
const { leetCode, github } = require("../Middlewares/profileFetcher");


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
