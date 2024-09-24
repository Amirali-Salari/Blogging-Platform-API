import Blog from "../Models/Blog.js";
import mongoose from "mongoose";

export const createPost = async (req, res) => {
  try {
    const article = await Blog.create(req.body);

    return res.status(201).json(article);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errors = {};

      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });

      return res.status(400).json({
        message: "ValidationError",
        errors: errors,
      });
    } else {
      return res.status(400).json({
        message: "UnexpectedError",
        errors: error,
      });
    }
  }
};
export const updatePost = async (req, res) => {
  try {
    const article = await Blog.findById(req.params.postID);

    article.title = req.body.title;
    article.content = req.body.content;
    article.category = req.body.category;
    article.tags = req.body.tags;

    await article.save();

    return res.status(200).json(article);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errors = {};

      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });

      return res.status(400).json({
        message: "ValidationError",
        errors: errors,
      });
    }
    if (error instanceof mongoose.Error.CastError) {
      return res.status(404).json({ message: "Invalid post ID" });
    } else {
      return res.status(400).json({
        message: "UnexpectedError",
        errors: error,
      });
    }
  }
};
