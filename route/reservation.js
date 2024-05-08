const express = require('express');
const router = express.Router(); // Use express.Router() to create a router instance

const { sendUser } = require("../controller/route");

router.post("/sent", sendUser);

module.exports = router;