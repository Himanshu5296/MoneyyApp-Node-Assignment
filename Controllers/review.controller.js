const formatDate = require("../DateFormat")
const ReviewSchema = require("../Models/review.model")

const createReview = async(req,res)=>{
    const {description} = req.body
    const review = new ReviewSchema({
        description,
        cDate:formatDate(),
        uDate:formatDate()
    })
    await review.save((err,success)=>{
        if(err){
            return res.status(400).send({message:err})
        }
        return res.status(201).send({message:"review added",review})
    })
}

const deleteReview = async(req,res)=>{
    const {id} = req.params
    const review = await ReviewSchema.findByIdAndDelete({_id:id})
    return res.status(201).send({message:"Review Deleted"})
}

module.exports = {createReview,deleteReview}