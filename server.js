const express = require("express");
const app = express();
const port = 8080;

// Tell Express to use EJS for rendering HTML
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // 1. Read secrets from the Codespace environment
  const oktaUrl = process.env.BASE_OKTA_URL;
  const rewardsClientId = process.env.REWARDS_CLIENT_ID;

  // 2. Render the 'index' view
  res.render("index");
});

app.get("/redirect/rewards", (req, res) => {
  // 1. Read secrets from the Codespace environment
  const oktaUrl = process.env.BASE_OKTA_URL;
  const rewardsClientId = process.env.REWARDS_CLIENT_ID;

  // 2. Render the 'rewards' view and pass the variables to it
  res.render("redirect/rewards", {
    oktaUrl: oktaUrl,
    rewardsClientId: rewardsClientId,
  });
});

app.get("/redirect/crm", (req, res) => {
  // 1. Read secrets from the Codespace environment
  const oktaUrl = process.env.BASE_OKTA_URL;
  const crmClientId = process.env.CRM_CLIENT_ID;

  // 2. Render the 'rewards' view and pass the variables to it
  res.render("redirect/crm", {
    oktaUrl: oktaUrl,
    crmClientId: crmClientId,
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
