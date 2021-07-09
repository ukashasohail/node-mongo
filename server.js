const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({
    status: 200,
    message: "SUCCESS !!!",
  });
});

app.listen(5000, () => console.log("Server running port 5000"));