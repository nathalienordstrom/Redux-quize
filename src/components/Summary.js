import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { NextButton, AnswerButton, SummaryButton } from './Button'


export const Summary = () => {

  return (
    <div>
      <h1>Quiz is over!</h1>
    </div>
  )
}