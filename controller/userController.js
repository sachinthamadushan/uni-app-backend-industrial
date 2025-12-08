const userModel = require('../model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userController = {
    createUser: async (req, res) => {
        try {
            const { username, password } = req.body;
            const [selectedUser] = await userModel.findByUsername(username);
            if (selectedUser.length === 0) {
                const length = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, length)
                const [result] = await userModel.create({
                    username: username,
                    password: hashedPassword
                });
                if (result.affectedRows === 1) {
                    return res.status(201).json({ msg: 'User saved!' });
                } else {
                    return res.status(400).json({ msg: 'User not saved!' });
                }
            } else {
                return res.status(400).json({ msg: 'Username has already saved!' });
            }
        } catch (error) {
            res.status(500).json({ msg: `Internal server error ${error.message}` });
        }
    },
    userLogin: async (req, res) => {
        try {
            const { username, password } = req.body;
            const [selectedUser] = await userModel.findByUsername(username);
            if (selectedUser.length === 0) {
                return res.status(400).json({ msg: 'User not found' });
            }
            const isMatch = await bcrypt.compare(password, selectedUser[0].password);
            if (!isMatch) {
                return res.status(400).json({ msg: 'Ivalid password, Please check...' });
            }
            const user = selectedUser[0];
            const token = jwt.sign(
                { id: user.user_id, username: user.username },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            )
            res.status(200).json({ token, 'username': user.username });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = userController;