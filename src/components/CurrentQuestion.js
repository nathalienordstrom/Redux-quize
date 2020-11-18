import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { NextButton, AnswerButton, RestartButton } from './Button'
import { Container, Header, StartButton, Image } from './Styling'

export const CurrentQuestion = () => {
  const answers = useSelector((state) => state.quiz.answers)
  const correctAnswers = answers.filter(answer => answer.isCorrect)

  const quizOver = useSelector((state) => state.quiz.quizOver)
  const quizStarted = useSelector((state) => state.quiz.quizStarted)
  const dispatch = useDispatch()
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const questions = useSelector((state) => state.quiz.questions)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    
    <Container>

      { !quizOver && quizStarted && (
      <>
      <h1>Question:{question.id}/5 </h1>
      <h2>{question.questionText}</h2>
      {/* Here we need to add the question options */}
      {/* Use map to display the answers. */}
      { question.options.map(
        (option, index) =>
          <AnswerButton 
            id={`${question.id}${index}`}
            key={index}
            onClick={(() => {
              
              dispatch(quiz.actions.submitAnswer(
                {
                  questionId: question.id,
                  answerIndex: index
                }
              ))
              dispatch(quiz.actions.goToNextQuestion())
              
      })}>{option}
          </AnswerButton>
      )}
      
        </>
      )}

      {/* Here we show the summary */}
      { quizOver && (
        <main>
          <h1>Summary</h1>

          <p>{console.log(answers)}</p>
          <p>{console.log(correctAnswers)}</p>
          <p>You had {correctAnswers.length}/{questions.length} correct answers.</p>

          <RestartButton 
            onClick={() => 
              dispatch(quiz.actions.restart())}
          >
            Restart quiz
          </RestartButton>
        </main>
      )}
      

    </Container>
  )
}
// To do:
// 
// i.5) (We have to use the submitAnswer somehow)
// ii) Add a "Next question" button which increments the current Question. (goToNextQuestion)