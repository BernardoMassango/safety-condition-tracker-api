class Report {
  constructor(data) {
    this.id = Date.now();
    this.timestamp = new Date().toISOString();
    this.data = data;
  }

  validate() {
    throw new Error("validate() must be implemented");
  }
}

module.exports = Report;
