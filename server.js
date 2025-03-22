const express = require("express");
const app = express();
const PORT = 5020;

app.get("/", (req, res) => {
  res.send(`Hello, World! The MircoService is Running at ${PORT}.`);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ MicroService is running at ${PORT}`);
});
