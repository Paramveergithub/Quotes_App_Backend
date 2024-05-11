const express = require('express');
const Quotes = require('../models/Quotes');
const router = express.Router();

router.get('/allquotes', async (req, res) => {
  try {
    let allQuotes = await Quotes.find({});
    res.status(200).json(allQuotes);
  } catch (err) {
    res.status(400).json({msg: "Something went wrong"});
  }
});


router.post('/addquotes', async (req, res) => {
  try{
    let {author, text} = req.body;
    let newQuotes = await Quotes.create({author, text});
    res.status(201).json({msg: "New quotes created successfully"});
  }catch (e) {
    res.status(400).json({msg: "Something went wrong while creating quotes"});
  }
});

router.get("/quotes/:id", async (req, res)=>{
  let quote = await Quotes.findById(req.params.id);
  res.status(200).json(quote);
})

module.exports = router;