const axios = require("axios");
const url = "https://leetcode.com/graphql";

module.exports.leetCode = async function leetCode(user) {
  try {
    const username = user;
    const config = {
      method: "POST",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        query: `query getUserProfile($username: String!, $year: Int) {
      allQuestionsCount {
        difficulty
        count
      }
      matchedUser(username: $username) {
        contributions {
          points
        }
        profile {
          reputation
          ranking
        }
        userCalendar(year: $year) {
          streak
          totalActiveDays
          dccBadges {
            timestamp
            badge {
              name
              icon
            }
          }
          submissionCalendar
          activeYears
        }
        submissionCalendar
        submitStats {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
          totalSubmissionNum {
            difficulty
            count
            submissions
          }
        }
      }
    }`,
        variables: { username, year: null },
      }),
    };

    const {
      data: { data },
    } = await axios.request(config);
    
    return data.matchedUser.submitStats.acSubmissionNum[0].count;
  } catch (error) {
    console.error("Error fetching data from LeetCode API:", error);
  }
};



module.exports.github = async function github(username) {
  try {
    let resp=await axios.get(`https://github-contributions-api.jogruber.de/v4/${username}`);

    let contributions = Object.values(resp.data.total).reduce((total, value) => total + value, 0);


    return contributions;
  } catch (error) {
    console.error('Error fetching data from GitHub API:', error);
    throw error;
  }
};
