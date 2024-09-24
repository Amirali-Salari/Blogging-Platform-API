import mongoose from "mongoose";
const { Schema, model } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is a required field."],
    },
    content: {
      type: String,
      required: [true, "Content is a required field."],
    },
    category: {
      type: String,
      required: [true, "Category is a required field."],
    },
    tags: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
);

const Blog = model("Blog", blogSchema);
export default Blog;
