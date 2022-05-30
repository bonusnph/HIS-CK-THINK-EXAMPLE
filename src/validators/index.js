const { validationResult, check } = require("express-validator");

exports.resultsValidator = (req) => {
  const messages = [];
  if (!validationResult(req).isEmpty()) {
    const errors = validationResult(req).array();
    for (const i of errors) {
      messages.push(i);
    }
  }
  return messages;
};

exports.createUserValidator = () => {
  return [
    check("firstName").notEmpty().withMessage("firstName is required"),
    check("lastName").notEmpty().withMessage("lastName is required"),
    check("email")
      .notEmpty()
      .withMessage("email is required")
      .isEmail()
      .withMessage("email is invalid format"),
  ];
};
