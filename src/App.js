import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'

import { CurrentQuestion } from 'components/CurrentQuestion'
import { LandingPage } from 'components/LandingPage'

const reducer = combineReducers({
  quiz: quiz.reducer
})
// Test commit
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>

      <LandingPage />
      <CurrentQuestion />


    </Provider>
  )
}
