const courseModule = require("../model/courseModel");

const courseController = {
    getAllCourses: async (req,res) => {
        try {
            const [result] =  await courseModule.findAll();
            if(result.length === 0){
                res.status(404).json({'msg':'Students not found'});
            }else{
                res.status(200).json({data:result});
            }
        } catch (error) {
            res.status(500).json({msg:`Internal server error ${error}`});
        }
    }
}

module.exports = courseController