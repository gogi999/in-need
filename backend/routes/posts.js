import express from 'express';

import {
  createPost,
  deletePost,
  getPost,
  getTimelinePosts,
  getUserPosts,
  likePost,
  updatePost,
} from '../controllers/posts.js';

const router = express.Router();

router.get('/:id', getPost);
router.get('/timeline/:userId', getTimelinePosts);
router.get('/profile/:username', getUserPosts);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.put('/:id/like', likePost);

export default router;
