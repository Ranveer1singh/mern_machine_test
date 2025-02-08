const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    image : {
        type : String,
        required : true,
        trim : true
    },
    rating : {
        type : Number,
        required : true,
        min:1,
        max:5
    },
    title : {
        type : String,
        required : true,
        trim : true
    },
    studentsWatched : {
        type : Number,
        required : true
    }
},
{
    timestamps : true
}
)

module.exports = mongoose.model("Review", reviewSchema)