const fs = require("fs");
const path = require("path");

const downloadFile = (req, res) => {
  const reportFilePath = path.join(__dirname, "../reports/sales_report.pdf");
  console.log(reportFilePath);
  const exist = fs.existsSync(reportFilePath);
  if (exist == true) {
    console.log("hai");
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      "attachment;filename=" + "todays-sales-report.pdf"
    );
    fs.createReadStream(reportFilePath).pipe(res);
  } else {
    res.status(404).json({ message: "report not available" });
  }
};
module.exports = {
  downloadFile,
};
