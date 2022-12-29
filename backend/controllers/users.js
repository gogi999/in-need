import bcrypt from 'bcrypt';

import User from '../models/User.js';

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, updatedAt, ...other } = user._doc;

        res.status(200).json(other);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const updateUser = async (req, res) => {
    try {
        if (req.body.userId === req.params.id || req.body.isAdmin) {
            if (req.body.password) {
                try {
                    const salt = await bcrypt.genSalt(10);
                    req.body.password = await bcrypt.hash(req.body.password, salt);
                } catch (err) {
                    return res.status(500).json(err);
                }
            }

            try {
                const user = await User.findByIdAndUpdate(req.params.id, {
                    $set:req.body
                });

                res.status(200).json('Account has been updated!');
            } catch (err) {
                return res.status(500).json(err);
            }
        } else {
            return res.status(403).json('You can update only your account!');
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

export const deleteUser = async (req, res) => {
    try {
        if (req.body.userId === req.params.id || req.body.isAdmin) {
            try {
                const user = await User.findByIdAndDelete(req.params.id);

                res.status(200).json('Account has been deleted successfully!');
            } catch (err) {
                return res.status(500).json(err);
            }
        } else {
            return res.status(403).json('You can delete only your account!');
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

export const followUser = async (req, res) => {
    try {
        if (req.body.userId !== req.params.id) {
            try {
                const user = await User.findById(req.params.id);
                const currentUser = await User.findById(req.body.userId);

                if (!user.followers.includes(req.body.userId)) {
                    await user.updateOne({
                        $push: { followers: req.body.userId }
                    });
                    await currentUser.updateOne({
                        $push: { followings: req.body.userId }
                    });

                    res.status(200).json('User has been followed!');
                } else {
                    res.status(403).json('You already follow this user!')
                }
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(403).json('You cannot follow yourself!');
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

export const unfollowUser = async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await currentUser.updateOne({ $pull: { followings: req.params.id } });
                
                res.status(200).json('User has been unfollowed!');
            } else {
                res.status(403).json('You do not follow this user!');
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('You cannot unfollow yourself!');
    }
}
