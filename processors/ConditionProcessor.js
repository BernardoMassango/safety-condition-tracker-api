const HazardReportFactory = require("../factories/HazardReportFactory");
const NearMissReportFactory = require("../factories/NearMissReportFactory");

function handleReport(type, data) {
  let factory;

  switch (type) {
    case "hazard":
      factory = new HazardReportFactory();
      break;
    case "nearmiss":
      factory = new NearMissReportFactory();
      break;
    default:
      throw new Error("Unknown report type");
  }

  const report = factory.createReport(data);

  if (!report.validate()) {
    throw new Error("Invalid report data");
  }

  return report;
}

module.exports = { handleReport };
