const Report = require("./Report");

class NearMissReport extends Report {
  validate() {
    return this.data.description;
  }
}

module.exports = NearMissReport;
