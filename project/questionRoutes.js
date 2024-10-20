// Import Express
const express = require('express');
const router = express.Router();
const { extractQuestions, classifyQuestion } = require('./questionController');

// Extract questions from text
router.post('/extract', async (req, res) => {
  const text = req.body.text;
  const questions = await extractQuestions(text);
  res.json(questions);
});

// Classify question
router.post('/classify', async (req, res) => {
  const question = req.body.question;
  const classification = await classifyQuestion(question);
  res.json(classification);
});

// Extract and classify questions
router.post('/extract-and-classify', async (req, res) => {
  const text = req.body.text;
  const questions = await extractQuestions(text);
  const classifications = await Promise.all(questions.map(classifyQuestion));
  res.json(classifications);
});

module.exports = router;