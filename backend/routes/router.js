const express = require ("express");
const router = express.Router();
const questions = require("../models/questionsSchema");

router.post('/admin', async (req, res) => {
  try {
      console.log(req.body); 

    const { question, option1, option2, option3, option4, answer } = req.body;
    const newQuestion = new questions({ question, option1, option2, option3, option4, answer });
    await newQuestion.save();
    res.status(201).json({ message: 'Question added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
})

// get userdata

router.get("/getdata",async(req,res) => {
  try{
     const question = await questions.find()
     console.log(question)
     res.status(200).json(question)
  }catch (error){
      res.status(200).json(error)
  }
})

module.exports = router;

