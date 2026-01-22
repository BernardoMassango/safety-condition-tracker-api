const SimpleRiskStrategy = require("../strategies/SimpleRiskStrategy");
const SeverityBasedRiskStrategy = require("../strategies/SeverityBasedRiskStrategy");

class RiskAssessmentService {
  assessRisk(type, report) {
    let strategy;

    if (type === "hazard") {
      strategy = new SeverityBasedRiskStrategy();
    } else {
      strategy = new SimpleRiskStrategy();
    }

    return strategy.assess(report);
  }
}

module.exports = RiskAssessmentService;
