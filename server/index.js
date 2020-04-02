const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hi");
});
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
