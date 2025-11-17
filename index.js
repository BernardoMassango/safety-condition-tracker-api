const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Safety Condition Tracker API is running");
});

// Endpoint json-params
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

// Endpoint deploy
app.post("/deploy", (req, res) => {
  res.json({
    message: "Activity deployed successfully",
    user: req.body.user || "unknown"
  });
});

// Endpoint analytics
app.get("/analytics", (req, res) => {
  res.json({
    reports_submitted: 12,
    active_users: 5
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running on port ${port}`));
