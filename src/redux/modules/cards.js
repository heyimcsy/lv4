import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import axios from 'axios'
// import nextId from 'react-id-generator/lib/nextId'

//initial States
const initialState = [
  {
    id: 1,
    title: '연애혁명',
    comments: '완결나서 아쉬움',
  },
  {
    id: 2,
    title: '이런영웅은싫어',
    comments: '삼촌작가 돈 많이 버셔서 호강하세요!!!!찰진 개그와 적당한 사회비판 항상 최고입니다. ',
  },
]

//reducers
const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      return [...state, action.payload]
    },
    removeCard: (state, action) => {
      return state.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addCard, removeCard } = cardsSlice.actions
export default cardsSlice.reducer
