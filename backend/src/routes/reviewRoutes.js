
const express = require('express');
const { createReviwes } = require("../controllers/reviweController");
const authMiddleware = require('../middkeware/authMiddleware');
const multer = require('multer');
const router = express.Router();

const upload = multer({
    dest : "uploads/"
})

router.post('/create', authMiddleware,upload.single("image"),createReviwes);
// router.post('/login', login);


module.exports = router  