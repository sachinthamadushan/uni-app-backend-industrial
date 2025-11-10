const studentModel = require('../model/studentModel');

const studentController = {
    saveStudent: async(req,res) => {
        try {
            const studentData = req.body;
            const [result] = await studentModel.create(studentData);
            if(result.affectedRows === 1){
               return res.status(201).json({msg:'Student saved!'});
            }else{
               return res.status(400).json({msg:'Student not saved!'}); 
            }
        } catch (error) {
            res.status(500).
            json({msg:
                `Internal server error 
                ${error}`});
        }
    },

    getAllStudents: async(req,res) => {
        try {
           const [resutl] = await studentModel.findAll();
           if(resutl.length === 0){
            return res.status(404).json({msg:'Students not found'});
           }
           res.status(200).json({data:resutl});
        } catch (error) {
            res.status(500).json({msg:`Internal server error ${error}`});
        }
    }

};

module.exports = studentController;