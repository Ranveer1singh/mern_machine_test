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
        await review.save();
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
exports.getReview = async (req, res)=>{
    try {
        const reviews = await Review.find();
        if(!reviews){
            return res.status(404).json({
                message : "Not Found"
            })
        }
        return res.status(200).json({
            message: "Review Retrive successfully",
            data: reviews
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
exports.updateReview = async (req, res)=>{
    const Id = req.params.id;
    console.log(Id)
    try {
        const review = await Review.findByIdAndUpdate(Id , req.body , {new : true});
        return res.status(200).json({
            message: "Review Update successfully",
            data : review
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


exports.deleteReview = async (req, res)=>{
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "Review Delete  successfully",
            data : review
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}