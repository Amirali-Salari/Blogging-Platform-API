import { Router } from "express";
import {
  createPost,
  deletePost,
  updatePost,
} from "../Controllers/postController.js";

const router = Router();

router.post("/posts", createPost);

router.put("/posts/:postID", updatePost);

router.delete("/posts/:postID", deletePost);

export { router };
