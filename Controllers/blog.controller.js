const formatDate = require("../DateFormat") 
const BlogSchema = require("../Models/blog.model") 

const getAllBlogs = async (req,res)=>{
    const user = await BlogSchema.find()
    res.status(201).json(user)
}

const getBlogById = async(req,res)=>{
    const {id} = req.params
    const user = await BlogSchema.findOne({_id:id})
    if(!user){
        return res.status(404).send({message:`${id} is not found`})
    }else{
        return res.status(201).json(user)
    }
}

const createBlog = async (req,res)=>{
    const{title,body} = req.body
    const blog =await new BlogSchema({
        title,body,
        cDate:formatDate(new Date()),
        uDate:formatDate(new Date())
    })
    blog.save((err,success)=>{
        if(err){
            return res.status(400).send({message:err.message})
        }
        return res.status(201).send({message:"Blog Created"})
    })

}

const updateBlog = async(req,res)=>{
    const {id} = req.params
    const{title,body} = req.body
    const user = await BlogSchema.findByIdAndUpdate(
        {_id:id},
       { $set:{title:title,body:body,uDate:formatDate(new Date())}}
    )
    return res.status(201).send({message:"blog updated",user})
}

const deleteBlog = async(req,res)=>{
    const {id} = req.params
    const user = await BlogSchema.findByIdAndDelete({_id:id})
    return res.status(201).send({message:"Blog Deleted"})
}

module.exports = {getAllBlogs, getBlogById, createBlog,updateBlog,deleteBlog}