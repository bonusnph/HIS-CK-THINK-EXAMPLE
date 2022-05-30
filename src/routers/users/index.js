const express = require("express");
const handler = require("../../handlers/users");
const { createUserValidator } = require("../../validators");

const router = express.Router();

router.get("/users", handler.findAll);
router.post("/users", createUserValidator(), handler.create);

module.exports = router;
