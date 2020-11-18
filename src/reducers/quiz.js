import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  {
    id: 1,
    questionText: "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
    options: ["Apple",
    "Microsoft",
    "Atari",
    "Commodore"],
    correctAnswerIndex: 0
  },
  {
    id: 2,
    questionText: "What amount of bits commonly equals one byte?",
    options: ["1", "2", "8", "64"],
    correctAnswerIndex: 2
  },
  {
    id: 3,
    questionText: "Which computer hardware device provides an interface for all other connected devices to communicate?",
    options: ["Central Processing Unit", "Hard Disk Drive", "Random Access Memory", "Motherboard"],
    correctAnswerIndex: 3
  },
  {
    id: 4,
    questionText: "What does the Prt Sc button do?",
    options: ["Closes all windows", "Nothing", "Captures what's on the screen and copies it to your clipboard", "Saves a .png file of what's on the screen in your screenshots folder in photos"],
    correctAnswerIndex: 2
  },
  {
    id: 5,
    questionText: "What is the code name for the mobile operating system Android 7.0?",
    options: ["Ice Cream Sandwich", "Nougat", "Jelly Bean", "Marshmallow"],
    correctAnswerIndex: 1
  }
]

const initialState = {
  questions,
  // answers is the array of the answers the user has chosen.
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  quizStarted: false
}



export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId` and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)
      console.log(answerIndex)
      console.log(question.correctAnswerIndex)
      
      // document.getElementById(`${questionId}${answerIndex}`).classList.remove("green")


      if (question.correctAnswerIndex === answerIndex) {
        console.log("Correct answer!")
        // document.getElementById(`${questionId}${answerIndex}`).className = "green"
        
      } else {
        console.log("Wrong answer :(")
      }



      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuestionIndex += 1
      }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    restart: () => {
      return initialState
    },

    startQuiz: (state) => {
      // Sätt quizStarted till true
      state.quizStarted = true
    }

  }
})
