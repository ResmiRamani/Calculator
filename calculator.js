const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1 + n2;

  res.send("The result of the calculation is " + result);
});
app.post("/bmiCalculator.html", function (req, res) {
  var w = Number(req.body.wt);
  var h = Number(req.body.ht);
  var bmi = w / (h * h);

  res.send("The result of the calculation is " + bmi);
});

app.listen(3000, function () {
  console.log("Server  started on port 3000");
});
