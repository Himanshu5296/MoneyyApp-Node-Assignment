const {Router} = require("express")
const { createReview, deleteReview } = require("../Controllers/review.controller")
const reviewRouter = Router()

//1.Create Review
reviewRouter.post("/create",createReview)

//2.Delete Review
reviewRouter.delete("/delete/:id",deleteReview)

module.exports = reviewRouter