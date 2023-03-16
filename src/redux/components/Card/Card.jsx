import React from 'react'
import Button from '../common/Button'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Card({ card }) {
  const CONFIRM_MESSAGE = `[삭제 확인]\n\n"${card.title}" 평가를 정말로 삭제하시겠습니까?\n삭제를 원치 않으시면 [취소] 버튼을 눌러주세요.`
  // const dispatch = useDispatch()

  // const removeCardHandlerButton = () => {
  //   if (window.confirm(CONFIRM_MESSAGE)) dispatch(removeCard(card.id))

  // }
  const removeCardHandlerButton = () => {
    if (window.confirm(CONFIRM_MESSAGE)) axios.delete(`${process.env.REACT_APP_URL_WEBTOON}/webtoon/${card.id}`)
  }
  return (
    <StyledDiv>
      <Link to={`/detail/${card.id}`}>상세보기</Link>
      <h1>{card.title}</h1>
      <div>
        <Button type="button" onClick={removeCardHandlerButton} backgroundColor="hotpink">
          삭제
        </Button>
      </div>
    </StyledDiv>
  )
}

export default Card
const StyledDiv = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid hotpink;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`
