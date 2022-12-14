import bcrypt from 'bcrypt';

import User from '../models/User.js';

export const register = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        const user = await newUser.save();
        res.status(201).json(user);  
    } catch (err) {
        res.status(500).json(err);
    }
}

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).send('User not found!');

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json('Invalid password!');

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}
