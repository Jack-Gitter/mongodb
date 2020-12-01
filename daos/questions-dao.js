const questionsModel = require('../models/questions/questions-model')
const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.find({_id: qid})
const findQuestionForQuiz = (qzid) => questionsModel.find({quizId: qzid})
module.exports = { findAllQuestions, findQuestionById, findQuestionForQuiz }