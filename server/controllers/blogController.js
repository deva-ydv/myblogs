import main from '../configs/gemini.js'
import imageKit from '../configs/imageKit.js'
import Blog from '../models/blogModel.js'
import Comment from '../models/Comment.js'

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } =
      JSON.parse(req.body.blog)

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Image is required'
      })
    }

    if (!title || !description || !category) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      })
    }

    // 🔥 ImageKit upload
    const uploadResponse = await imageKit.upload({
      file: req.file.buffer,
      fileName: req.file.originalname,
      folder: 'blogs'
    })

    // 🔥 Optimized CDN image
    const optimizedImageUrl = imageKit.url({
      path: uploadResponse.filePath,
      transformation: [
        { quality: 'auto' },
        { format: 'webp' },
        { width: '1280' }
      ]
    })

    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image: optimizedImageUrl,
      isPublished
    })

    return res.status(201).json({
      success: true,
      message: 'Blog added successfully'
    })

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const getAllBlogs = async(req,res)=>{
  try {
    const blogs = await Blog.find({isPublished: true})
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

export const getBlogById = async (req,res) =>{
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId)
    if(!blog){
      return res.status(404).json({
        success: false,
        message: "blog not found"
      })
    }
    res.status(200).json({
      success: true,
      blog
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const deleteBlogById = async (req, res) =>{
  try {
    const {id} = req.body
    await Blog.findByIdAndDelete(id);
    await Comment.deleteMany({blog: id})
    res.status(200).json({
      success: true,
      message: "Blog deleted successfully"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const togglePublish = async (req,res) =>{
  try {
    const {id} = req.body
    const blog = await Blog.findById(id)
    blog.isPublished = !blog.isPublished;
    await blog.save()
    res.status(200).json({
      success: true,
      message: 'Blog status updated'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const addComment = async (req,res) =>{
  try {
    const {blog, name, content} = req.body
    await Comment.create({
      blog,
      name,
      content,
    })
    res.status(201).json({
      success: true,
      message: 'Comment added for review'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}


export const getBlogComments = async (req,res) =>{
  try {
    const {blogId}  = req.params
    const comments = await Comment.find({blog: blogId, isApproved: true}).sort({createdAt: -1})
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


export const generateContent = async (req,res) =>{
  try {
    const {prompt} = req.body
    const content =  await main(prompt + 'Generate a blog content for this topic in simple text format')
    res.status(200).json({
      success: true,
      content
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}