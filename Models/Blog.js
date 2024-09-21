import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: false
    },
})

const Blog = model('Blog', blogSchema);
export default Blog;