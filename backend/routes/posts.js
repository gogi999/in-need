import express from 'express';

import {
  createPost,
  deletePost,
  getPost,
  getTimelinePosts,
  likePost,
  updatePost,
} from '../controllers/posts.js';

const router = express.Router();

router.get('/:id', getPost);
router.get('/timeline/all', getTimelinePosts);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.put('/:id/like', likePost);

export default router;
