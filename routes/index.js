var express = require("express");
var functions = require('../libraries/functions');
var router = express.Router();
const { body, validationResult } = require("express-validator");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Brackets checker" });
});

router.post(
  "/",
  [
    body("character")
      .isLength({ max: 100000 })
      .withMessage("Jumlah karakter tidak boleh lebih dari 100.000.")
  ],
  function (req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("index", {
        title: "Brackets checker",
        form: req.body,
        error: errors.array()[0].msg,
      });
    } else {
      var result = functions.validationBrackets(req.body.character);

      res.render("index", {
        title: "Brackets checker",
        form: req.body,
        result: result
      });
    }
  }
);

module.exports = router;
