const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login',(req,res)=>{
    const {username,password} = req.body;
    if(username!== process.env.ADMIN_USER)
    {
        return res.status(403).json({error:'Invalid credentials'})
    }
    const isValid = bcrypt.compareSync(password,process.env.ADMIN_PASS);
    if(!isValid)
    {
        return res.status(403).json({error:'Invalid Credentials'});
    }
    const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'2h'});
     res.json({token});
})

module.exports =router;