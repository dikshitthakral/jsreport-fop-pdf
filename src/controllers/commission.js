const commissionService = require("../services/commission.service");
const fs = require("fs");
const path = require("path");
const exportCommissions = async (req, res) => {
  const comissionParams = req.query;
  return commissionService
    .exportCommissions(comissionParams)
    .then((result) => {
      const response = result.result;
      var data = [];

      response.on("data", function (chunk) {
        data.push(chunk);
      });

      response.on("end", function () {
        data = Buffer.concat(data);
        res.writeHead(201, {
          "Content-Type": "application/pdf",
          "Content-Disposition":
            "attachment; commissions-${Date.now() / 1000}.pdf",
        });
        res.end(data);
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "Error",
        data: {},
        error: err.message || "Error occured while downloading comissions pdf",
      });
    });
};

module.exports = {
  exportCommissions,
};
