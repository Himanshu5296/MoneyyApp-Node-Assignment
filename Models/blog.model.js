const {Schema,model} = require("mongoose")

const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    body:{
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

const BlogSchema = model("blog",blogSchema)

module.exports = BlogSchema