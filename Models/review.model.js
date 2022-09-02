const {Schema,model} = require("mongoose")

const reviewSchema = new Schema({
    userId: Schema.Types.ObjectId,
    description:{
        type:String,
        required:true
    },
    cDate:{
        type:Date
    },
    uDate:{
        type:Date
    }
})

const ReviewSchema = model("review",reviewSchema)

module.exports = ReviewSchema