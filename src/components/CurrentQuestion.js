import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const CurrentQuestion = () => {
  const dispatch = useDispatch()
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {/* Here we need to add the question options */}
      {/* Use map to display the answers. */}
      { question.options.map(
        option => <button onClick={(() => 
          dispatch(quiz.actions.submitAnswer(
          { 
            questionId: question.currentQuestionIndex, 
            answerIndex: question.options.indexOf(option)
          }
        )))}>{option}</button>
      )}

      {/* // Dispatch the action that increments the index.
      // Dispatch the action from the reducer.
      // In the devtools, you can see all actions that's dispatched. */}
    </div>
  )
}
// To do:
// 
// i.5) (We have to use the submitAnswer somehow)
// ii) Add a "Next question" button which increments the current Question. (goToNextQuestion)