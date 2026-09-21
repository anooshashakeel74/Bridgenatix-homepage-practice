const express = require('express');
const fs= require('fs');
const path = require('path');
const verifytoken = require("../middleware/verifytoken");
const router = express.Router();
const dbPath = path.join(__dirname,'../data/quotes.json');

function readDB(){
    if(!fs.existsSync(dbPath)) fs.writeFileSync(dbPath,'[]');
    const content = fs.readFileSync(dbPath, 'utf-8').trim();
    if (!content) return [];
    return JSON.parse(content);
}

function writeDB(data)
{
    fs.writeFileSync(dbPath,JSON.stringify(data,null,2));
}

router.get('/',verifytoken,(req,res)=>{
    res.json(readDB());
});

router.post('/',(req,res)=>{
    const quotes =readDB();
    const newquotes ={id:Date.now().toString(),...req.body};
    quotes.push(newquotes);
    writeDB(quotes);
    res.json(newquotes);
});

router.put('/:id',(req,res)=>{
    const quotes = readDB();
    const idx = quotes.findIndex(q=>q.id===req.params.id);
    if(idx===-1) return res.status(404).json({error:'Not FOUND'});
    quotes[idx] = { ...quotes[idx], ...req.body };
    writeDB(quotes);
    res.json(quotes[idx]);
});

router.delete('/:id',verifytoken,(req,res)=>{
    const quotes = readDB().filter(q=>q.id !== req.params.id);
    writeDB(quotes);
    res.json({success:true});

});

module.exports = router;