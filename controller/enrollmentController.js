const enrollmentModel = require("../model/enrollmentModel");

const enrollmentConroller = {
    createEnrollment: async (req, res) => {
        try {
         const entrollment = req.body;
         const [result] = await enrollmentModel.create(entrollment);
         if (result.affectedRows === 1) {
           return res.status(201).json({msg:'Enrollment saved !'});
         }else{
            return res.status(400).json({msg:'Enrollment not saved !'});
         }
        } catch (error) {
        res.status(500).json({msg:`Internal server error ${error}`});
        }
    },
    getAllEnrollmets: async (req,res) => {
        try {
            const [result] = await enrollmentModel.findAll();
            if (result.length === 0) {
                return res.status(404).json({msg:'Enrollments not found'});
            }
            res.status(200).json({data:result});
        } catch (error) {
            res.status(500).json({msg:`Internal server error ${error}`});
        }
    },
    getEnrollmentById: async(req,res) => {
        try {
            const entrollId = req.params.eid;
            const [result] = await enrollmentModel.findById(entrollId);
            if (result.length === 0) {
                return res.status(404).json({msg:'Enrollment not found'});
            }
            res.status(200).json({data:result});
        } catch (error) {
            res.status(500).json({msg:`Internal server error ${error}`});
        }
    },

    updateEnrollment: async (req,res) => {
        try {
            const entrollment = req.body;
            const enrollId = req.params.eid;
            const [findedEnrollment] = await enrollmentModel.findById(enrollId);
            if (findedEnrollment.length === 0) {
                return res.status(404).json({msg:'Enrollment not found'});
            }
            conodenst [result] = await enrollmentModel.update(entrollment,enrollId);
            if (result.affectedRows === 1) {
                return res.status(200).json({msg:'Enrollment updated!'});
            }else{
                return res.status(400).json({msg:'Enrollment not updated!'});
            }
        } catch (error) {
            res.status(500).json({msg:`Internal server error ${error}`});
        }
    }
}

module.exports = enrollmentConroller;
