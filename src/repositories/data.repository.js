const https = require("https");
const { commissionsData } = require("../mock/mock-data");

const getCommissionsData = async () => {
  return new Promise((resolve, reject) => {
    https
      .get("https://coderbyte.com/api/challenges/json/age-counting", (resp) => {
        let data = "";
        let apiResponse;
        resp.on("data", (chunk) => {
          data += chunk;
        });

        resp.on("end", () => {
          apiResponse = JSON.parse(data).data;
          const result = commissionsData.data;
          resolve(result);
        });
      })
      .on("error", (e) => {
        reject(e);
      });
  });
};

module.exports = {
  getCommissionsData,
};
