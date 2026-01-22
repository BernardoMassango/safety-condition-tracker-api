const express = require("express");
const ReportSubmissionFacade = require("./facades/ReportSubmissionFacade");

const app = express();
app.use(express.json());

const facade = new ReportSubmissionFacade();

app.get("/", (req, res) => {
  res.send("Safety Condition Tracker API is running");
});

app.get("/json-params", (req, res) => {
  res.json({
    activity_name: "Safety Condition Tracker",
    description: "Registo de condições inseguras",
    parameters: [
      { name: "frequency", type: "string", default: "semanal" },
      { name: "max_reports_per_user", type: "integer", default: 5 },
      { name: "allow_photos", type: "boolean", default: true }
    ]
  });
});

app.post("/deploy", (req, res) => {
  const { type, data } = req.body;

  try {
    const result = facade.submitReport(type, data);
    res.json({ status: "ok", result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/analytics", (req, res) => {
  res.json({
    reports_submitted: 12,
    active_users: 5
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Safety Condition Tracker running on port ${port}`)
);
