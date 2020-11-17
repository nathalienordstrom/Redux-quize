import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { NextButton, AnswerButton } from './Button'


export const CurrentQuestion = () => {
  const quizOver = useSelector((state) => state.quiz.quizOver)
  const dispatch = useDispatch()
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question:{question.id}/5 </h1>
      <h2>{question.questionText}</h2>
      {/* Here we need to add the question options */}
      {/* Use map to display the answers. */}
      { question.options.map(
        (option, index) => 
        <AnswerButton id={`${question.id}${index}`}

        background={(index === question.correctAnswerIndex) ? 'green' :  'red'}
        key={index}
        onClick={(() => 
          dispatch(quiz.actions.submitAnswer(
          { 
            questionId: question.id, 
            answerIndex: index
          }
        )))}>{option}
        </AnswerButton>
      )}
      { !quizOver && (
          <NextButton className='correct-answer' onClick={(() => {
            dispatch(quiz.actions.goToNextQuestion())
            document.getElementById(`${question.id}${index}`).classList.remove("green")

          })}
            >Next
        </NextButton>
      )
       }

      { quizOver && (
        <NextButton className='correct-answer' onClick={(() => 
          dispatch(quiz.actions.goToNextQuestion()))}>
          Next
        </NextButton>
      )
}

      
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