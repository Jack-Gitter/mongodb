const quizzesModel = require('../models/quizzes/quizzes-model')
const findAllQuizzes = () => quizzesModel.find()
const findQuizById = (quizId) => quizzesModel.find({quizID: quizId})
module.exports = { findAllQuizzes, findQuizById }