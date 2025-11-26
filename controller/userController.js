const userModel = require('../model/userModel');
const bcrypt = require('bcryptjs');

const userController = {
    createUser:async(req,res) => {
        try {
            const {username,password} = req.body;
            const length = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password,length)
            const [result] = await userModel.create({
                username:username,
                password:hashedPassword
            });
            if(result.affectedRows === 1){
                return res.status(201).json({msg:'User saved!'});
            }else{
                return res.status(400).json({msg:'User not saved!'});
            }
        } catch (error) {
            res.status(500).json({msg:`Internal server error ${error}`});
        }
    }
}

module.exports = userController;