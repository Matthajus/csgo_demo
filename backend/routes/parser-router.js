const controller = require('../controllers/parser-controller');
const express = require("express");
const multer = require("multer");

var router = express.Router();

router.post('', controller.parse);
router.post('', multer({dest: "./uploads/"}).single("upload"));
module.exports = router;
