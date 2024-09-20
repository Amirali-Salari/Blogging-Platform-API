import { Router } from 'express';

const router = Router()

router.post('/posts', (req, res) => {
    console.log('Post request recived.')
    console.log(req.body);
})

export { router }