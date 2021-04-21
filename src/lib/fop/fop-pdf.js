const jsreport = require("jsreport");
const fs = require("fs");
const path = require("path");

const getPdf = async (data) => {
  return new Promise((resolve, reject) => {
    let input = {
      template: {
        content: fs
          .readFileSync(path.join(__dirname, "/template.fo"))
          .toString(),
        recipe: "fop-pdf",
        engine: "jsrender",
      },
      data: data,
    };
    jsreport
      .render(input)
      .then((out) => {
        out.result.pipe(
          fs.createWriteStream(path.join(__dirname, "/files/test.pdf"))
        );
        resolve(out);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

module.exports = {
  getPdf,
};
