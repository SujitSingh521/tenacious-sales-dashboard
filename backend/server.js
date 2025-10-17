const express = require("express");

const app = express();

// Root route
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center;">Welcome to the Tenacious Sales Dashboard Backend!</h1>'
    );
});

// Server listens on port 5000
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
