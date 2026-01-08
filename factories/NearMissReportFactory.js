const ReportFactory = require("./ReportFactory");
const NearMissReport = require("../models/NearMissReport");

class NearMissReportFactory extends ReportFactory {
  createReport(data) {
    return new NearMissReport(data);
  }
}

module.exports = NearMissReportFactory;
