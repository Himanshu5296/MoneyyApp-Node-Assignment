const {Router} = require("express")
const { getAllBlogs, getBlogById, createBlog,updateBlog,deleteBlog } = require("../Controllers/blog.controller")
const blogRouter = Router()

//1.Get All Blogs
blogRouter.get("/",getAllBlogs)

//2.Get Blog By Id
blogRouter.get("/:id",getBlogById)

//3.Create Blog
blogRouter.post("/create",createBlog)

// 4.Update Blog
blogRouter.put("/update/:id",updateBlog)

// 5.Delete Blog
blogRouter.delete("/delete/:id",deleteBlog)

module.exports = blogRouter