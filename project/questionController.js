// Import natural library
const natural = require('natural');
const classifier = new natural.BayesClassifier();

// Load question classification model
const questionModel = require('./questionModel.json');

// Extract questions from text
async function extractQuestions(text) {
  const sentences = text.split('.');
  const questions = sentences.filter((sentence) => sentence.trim().endsWith('?'));
  return questions;
}

// Classify question
async function classifyQuestion(question) {
  const classification = classifier.categorize(question);
  return classification;
}

// Train question classification model
async function trainQuestionModel(questions) {
  questions.forEach((question) => {
    classifier.addDocument(question, questionModel[question]);
  });
  classifier.train();
}

module.exports = {
  extractQuestions,
  classifyQuestion,
  trainQuestionModel
};