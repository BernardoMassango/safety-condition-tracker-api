const Report = require("./Report");

class HazardReport extends Report {
  validate() {
    return this.data.location && this.data.severity;
  }
}

module.exports = HazardReport;
