import React from 'react'
import { HomeContainer, Header, Button } from './Styling'
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
    
  <HomeContainer>
      { !quizStarted && (
      <>
        <Header>Computer Science Quiz</Header>
        <Button onClick={() => dispatch(quiz.actions.startQuiz())}>Start quiz</Button>
      </>
      )}
 
    </HomeContainer>

    )
}
