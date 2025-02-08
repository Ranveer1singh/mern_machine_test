
const express = require('express');
const { createReviwes, updateReview, getReview, deleteReview } = require("../controllers/reviweController");
const authMiddleware = require('../middkeware/authMiddleware');
const multer = require('multer');
const router = express.Router();

const upload = multer({
    dest : "uploads"
})

router.post('/', authMiddleware,upload.single("image"),createReviwes);
router.get('/',getReview);
router.put('/:id', authMiddleware,updateReview);
router.delete('/:id', authMiddleware,deleteReview);
// router.post('/login', login);


module.exports = router  