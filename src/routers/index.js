const express = require('express');
const root = express.Router();
const router = express.Router();

const usersRoute = require('./users'); 
router.use(usersRoute);

root.use("/api/v1", router);

module.exports = root