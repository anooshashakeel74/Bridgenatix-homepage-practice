const  jwt = require('jsonwebtoken');

function verifytoken(req, res, next)
{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer '))
    {
        return res.status(401).json({error:'No Token Provided'});
    }
    const token = authHeader.split(' ')[1];
    try{
        req.admin = jwt.verify(token,process.env.JWT_SECRET);
        next();
    }
    catch(err){
        return res.status(401).json({error:'No Token Allocated'})
    }
}
module.exports = verifytoken