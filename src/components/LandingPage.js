import React from 'react'
import { Container, Header, StartButton, Image } from './Styling'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

// container
// header - text
// button - start quiz
// image

export const LandingPage = () => {
  const dispatch = useDispatch()

  return (
    <Container>
      <Header>Text text text - take quiz!</Header>
      <StartButton onClick={() => dispatch(quiz.actions.startQuiz())}>Start quiz</StartButton>

    </Container>

    )
}
