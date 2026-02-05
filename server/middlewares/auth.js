import jwt from "jsonwebtoken";
import Blog from "../models/blogModel.js";
import Comment from "../models/Comment.js";

export const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if(!token){
    return res.status(401).json({
        success: false,
        message: "token missing"
    })
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

export const getAllBlogsAdmin = async (req,res) =>{
  try {
    const blogs = await Blog.find({}).sort({createdAt: -1})
    res.status(200).json({
      success: true,
      blogs
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const getAllComments = async (req,res) =>{
  try {
    const comments = await Comment.find({}).populate("blog").sort({createdAt: -1})
    res.status(200).json({
      success: true,
      comments
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const getDashboard = async (req,res) =>{
  try {
    const recentBlogs = await Blog.find({}).sort({createdAt: -1}).limit(5)
    const blogs = await Blog.countDocuments()
    const comments = await Comment.countDocuments()
    const drafts = await Blog.countDocuments({isPublished: false})
    const dashboardData = {blogs, comments, drafts, recentBlogs}
    res.status(200).json({
      success: true,
      dashboardData
    })
  } catch (error) {
     res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const deleteCommentById = async (req,res) =>{
  try {
    const {id} = req.body
    await Comment.findByIdAndDelete(id)
    res.status(200).json({
      success: true,
      message: 'Comment deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const approveCommentById = async (req, res) =>{
  try {
    const {id} = req.body
    await Comment.findByIdAndUpdate(id,{isApproved: true})
    res.status(200).json({
       success: true,
      message: 'Comment approved successfully'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}