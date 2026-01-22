const { handleReport } = require("../processors/ConditionProcessor");
const RiskAssessmentService = require("../services/RiskAssessmentService");

class ReportSubmissionFacade {
  constructor() {
    this.riskService = new RiskAssessmentService();
  }

  submitReport(type, data) {
    // Factory Method: criação e validação
    const report = handleReport(type, data);

    // Avaliação de risco delegada (refatorização do Blob)
    const riskAssessment = this.riskService.assessRisk(type, report);

    return {
      report,
      riskAssessment
    };
  }
}

module.exports = ReportSubmissionFacade;
