const userModel = require('../model/userModel');

const userController = {
    createUser:async(req,res) => {
        try {
            const [result] = await userModel.create(req.body);
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