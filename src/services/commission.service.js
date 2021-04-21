const { getCommissionsData } = require("../repositories/data.repository");
const { getPdf } = require("../lib/fop/fop-pdf");

const exportCommissions = async (params) => {
  try {
    const commissionsData = await getCommissionsData();
    return getPdf(commissionsData);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  exportCommissions,
};
