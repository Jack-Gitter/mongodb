const questionsModel = require('../models/questions/questions-model-model.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionById = (quizId) => questionsModel.findById(quizId)
const findQuestionForQuiz = (qzid) => questionsModel.find({quizId: qzid})
module.exports = { findAllQuestions, findQuestionById, findQuestionForQuiz }