
const jwt = require('jsonwebtoken');

const loginToken = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]

    console.log(token);

    if(!token){
        return res.status(401).json({msg:'Access denied & No token'});
    }

    jwt.verify(token,process.env.JWT_SECRET, 
        (err,user) => {
            if (err) {
                return res.status(403).json({msg:'Invaild Token'});n 
            }
            req.user = user
            next();
        }
    )
}

module.exports = loginToken;