const RiskAssessmentStrategy = require("./RiskAssessmentStrategy");

class SeverityBasedRiskStrategy extends RiskAssessmentStrategy {
  assess(report) {
    const severity = report.data.severity || "low";
    return {
      level: severity,
      score: severity === "high" ? 5 : 2
    };
  }
}

module.exports = SeverityBasedRiskStrategy;
