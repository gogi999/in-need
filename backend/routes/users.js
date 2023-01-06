import express from 'express';

import {
  deleteUser,
  followUser,
  getFriends,
  getUser,
  unfollowUser,
  updateUser,
} from '../controllers/users.js';

const router = express.Router();

router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/', getUser);
router.get('/friends/:userId', getFriends);
router.put('/:id/follow', followUser);
router.put('/:id/unfollow', unfollowUser);

export default router;
