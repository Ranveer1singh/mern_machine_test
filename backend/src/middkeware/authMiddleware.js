const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message : "Unauthorized User"
        })
    }
    try {
        console.log("process.env.JWT_SECRET", process.env.JWT_SECRET);
        
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

module.exports = authMiddleware;