const RiskAssessmentStrategy = require("./RiskAssessmentStrategy");

class SimpleRiskStrategy extends RiskAssessmentStrategy {
  assess(report) {
    return { level: "low", score: 1 };
  }
}

module.exports = SimpleRiskStrategy;
