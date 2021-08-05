var express = require("express"),
    app = express();

var router = express.Router();

router.get("/graphics-cards", function (req, res) {
  res.send("Hello World!");
});

app.use(router);

app.listen(3000, function () {
  console.log("Node server running on http://localhost:3000");
});