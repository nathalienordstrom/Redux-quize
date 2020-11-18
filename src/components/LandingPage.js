import React from 'react'
import { Container, Header, StartButton, Image } from './Styling'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'

// container
// header - text
// button - start quiz
// image

export const LandingPage = () => {
  const dispatch = useDispatch()
  const quizStarted = useSelector((state) => state.quiz.quizStarted)

  return (
    
    <Container>
      { !quizStarted && (
      <>
        <Header>Text text text - take quiz!</Header>
        <StartButton onClick={() => dispatch(quiz.actions.startQuiz())}>Start quiz</StartButton>
      </>
      )}
 
    </Container>

    )
}
