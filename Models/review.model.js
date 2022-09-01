const {Schema,model} = require("mongoose")

const reviewSchema = new Schema({
    userID: String,
    description:{
        type:String,
        required:true
    },
    cDate:{
        type:Date,
        default:new Date()
    },
    uDate:{
        type:Date,
        default:new Date()
    }
})

const ReviewSchema = model("review",reviewSchema)

module.exports = ReviewSchema