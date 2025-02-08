const Review = require('../models/Review')

exports.createReviwes = async (req, res)=>{

    try {
        const {rating, title, studentsWatched} = req.body;
        const image = req.file ? req.file.path : "";

        const review = new Review({
            image,
            rating,
            title,
            studentsWatched,
        })

        return res.status(201).json({
            message : "Review is created",
            data : review
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}