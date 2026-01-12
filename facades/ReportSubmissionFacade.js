const { handleReport } = require("../processors/ConditionProcessor");
const SimpleRiskStrategy = require("../strategies/SimpleRiskStrategy");
const SeverityBasedRiskStrategy = require("../strategies/SeverityBasedRiskStrategy");

class ReportSubmissionFacade {
  submitReport(type, data) {
    const report = handleReport(type, data);

    let strategy;
    if (type === "hazard") {
      strategy = new SeverityBasedRiskStrategy();
    } else {
      strategy = new SimpleRiskStrategy();
    }

    const riskAssessment = strategy.assess(report);

    return { report, riskAssessment };
  }
}

module.exports = ReportSubmissionFacade;
