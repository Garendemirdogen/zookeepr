const express = require("express");
const app = express();
const { animals } = require("./data/animals");
app.get("/api/animals", (req, res) => {
  res.json(animals);
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
