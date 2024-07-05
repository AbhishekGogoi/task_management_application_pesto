const { check, validationResult } = require("express-validator");

exports.validateTask = [
  check("title").not().isEmpty().withMessage("Title is required"),
  check("status")
    .isIn(["To Do", "In Progress", "Done"])
    .withMessage("Invalid status"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
