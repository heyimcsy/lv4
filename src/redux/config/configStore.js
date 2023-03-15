import { configureStore } from '@reduxjs/toolkit'
import cards from '../modules/cards'

const store = configureStore({
  reducer: {
    cards,
  },
})

export default store
