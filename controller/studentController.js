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
    },

    getStudentById: async(req,res) => {
        try {
            const id = req.params.stuId;
            const [result] = await 
            studentModel.findById(id);
            if (result.length === 0) {
                return res.status(404).
                json({msg:'Student Not Found !'});
            }
            res.status(200).json({data:result});
        } catch (error) {
            res.status(500).json
            ({msg:`Internal server error ${error}`});
        }
    },

    getStudentText: async (req, res) => {
        try {
            const searchtText = req.params.text;
            console.log(searchtText);
            
            const [result] = await studentModel.findByText(searchtText);
            if(result.length === 0){
                return res.status(404).json({msg:'Student Not Found !'});
            }
            res.status(200).json({data:result});
        } catch (error) {
            res.status(500).json({msg:`Internal server error ${error}`});
        }
    },

    updateStudent: async (req, res) => {
        try {
            const studentData = req.body;
            const studentId = req.params.stuId;
            const [findedStudent] = await studentModel.findById(studentId);
            if (findedStudent.length === 0) {
                return res.status(404).json({msg:'Student Not Found'});
            }
            const [result] = await studentModel.update(studentData,studentId);
            if (result.affectedRows === 1) {
                return res.status(200).json({msg:'Student Updated!'});
            }else{
                return res.status(400).json({msg:'Student Not Updated!'});
            }
        } catch (error) {
            res.status(500).json({msg:`Internal server error ${error}`});
        }
    },

    deleteStudent: async (req,res) => {
        try {
            const studentId = req.params.stuId;
            const [findedStudent] = await studentModel.findById(studentId);
            if (findedStudent.length === 0) {
                return res.status(404).json({msg:'Student Not Found'});
            }
            const [result] = await studentModel.delete(studentId);
            if (result.affectedRows === 1) {
                return res.status(200).json({msg:'Student Deleted !'});
            }else{
                return res.status(400).json({msg:'Student Not Deleted !'});
            }
        } catch (error) {
            res.status(500).json({msg:`Internal server error ${error}`});
        }
    }

};

module.exports = studentController;