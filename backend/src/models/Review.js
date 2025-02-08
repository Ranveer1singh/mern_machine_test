const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    image : {
        type : String,
        required : true,
        trim : true
    },
    rating : {
        type : String,
        required : true,
        // min:1,
        // max:5
    },
    title : {
        type : String,
        required : true,
        trim : true
    },
    studentsWatched : {
        type : String,
        required : true
    }
},
{

    toJSON : {
        transform(doc,ret){
            delete ret.password,
            delete ret.__v,
            delete ret.createdAt,
            delete ret.updatedAt
        }
    },
    timestamps : true
}
)

module.exports = mongoose.model("Review", reviewSchema)