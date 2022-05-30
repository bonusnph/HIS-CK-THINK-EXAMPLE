const usersService = require("../../services/users");
const { resultsValidator } = require("../../validators");

async function findAll(req, res) {
  try {
    const errors = resultsValidator(req);
    if (errors.length > 0) {
      return res.status(400).json({
        method: req.method,
        status: res.statusCode,
        error: errors,
      });
    }

    const result = await usersService.findAll();

    return res.json({
      status: "OK",
      result,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      statusCode: 500,
      messag: e.message,
    });
  }
}

async function create(req, res) {
  try {
    const errors = resultsValidator(req);
    if (errors.length > 0) {
      return res.status(400).json({
        method: req.method,
        status: res.statusCode,
        error: errors,
      });
    }

    const result = await usersService.create(
      Object.fromEntries(
        ["firstName", "lastName", "email"].map((key) => [key, req.body[key]])
      )
    );

    return res.json({
      status: "OK",
      result,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      statusCode: 500,
      messag: e.message,
    });
  }
}

module.exports = {
  findAll,
  create,
};
