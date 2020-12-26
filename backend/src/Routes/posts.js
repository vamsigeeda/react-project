import express from 'express';

import {getPosts ,loginPosts,registerPosts} from '../controllers/posts.js';
const router = express.Router();


router.get('/',getPosts);

router.post('/register',registerPosts);

router.post('/login',loginPosts);


export default router;