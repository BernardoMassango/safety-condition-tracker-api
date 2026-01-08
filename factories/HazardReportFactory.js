const ReportFactory = require("./ReportFactory");
const HazardReport = require("../models/HazardReport");

class HazardReportFactory extends ReportFactory {
  createReport(data) {
    return new HazardReport(data);
  }
}

module.exports = HazardReportFactory;
