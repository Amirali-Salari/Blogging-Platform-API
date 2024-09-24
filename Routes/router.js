import { Router } from "express";
import { createPost, updatePost } from "../Controllers/postController.js";

const router = Router();

router.post("/posts", createPost);

router.put("/posts/:postID", updatePost);

export { router };
