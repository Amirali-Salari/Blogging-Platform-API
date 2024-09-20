import { Router } from 'express';
import { createPost } from '../Controllers/postController.js';

const router = Router()

router.post('/posts', createPost)

export { router }