import Blog from '../Models/Blog.js'

export const createPost = async (req, res) => {
    const article = await Blog.create(req.body)
    console.log(article)
}