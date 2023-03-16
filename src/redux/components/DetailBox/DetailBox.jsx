import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

// cardBox : card.id, 뒤로가기 , card.title, card.comments
// buttonBox : 수정버튼, 삭제버튼
function DetailBox() {
  // 다른 컴포넌트로 이동하기 위한 useNavigate
  // const navigate = useNavigate()

  // 이전 컴포넌트에서 넘어온 parameter를 조회
  const params = useParams()

  const [cards, setCards] = useState(null)

  // patch에서 사용할 id, 수정값의 state를 추가
  const [targetId, setTargetId] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editComments, setEditComments] = useState('')
  const edit = {
    title: editTitle,
    comments: editComments,
    id: targetId,
  }
  const fetchCards = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_URL_WEBTOON}/webtoon`)
    setCards(data)
  }

  // dependence array에 card 넣어줬더니 무한반복 ㅠ
  useEffect(() => {
    fetchCards()
  }, [])

  const card = cards?.find((cards) => cards.id == params.id)

  const CONFIRM_MESSAGE = '정말 삭제하겠습니까?'
  const removeCardHandlerButton = () => {
    if (window.confirm(CONFIRM_MESSAGE)) axios.delete(`${process.env.REACT_APP_URL_WEBTOON}/webtoon/${params.id}`)
    fetchCards()
  }
  console.log('detail axios cards ->', cards)

  // 수정버튼 이벤트 핸들러 추가 👇
  const onClickEditButtonHandler = (cardID, edit) => {
    axios.patch(`${process.env.REACT_APP_URL_WEBTOON}/webtoon/${cardID}`, edit)

    setTargetId('')
    setEditTitle('')
    setEditComments('')
    fetchCards()
  }

  return (
    <>
      <DetailContainer>
        <CardBox>
          <tr>
            <th>TITLE :{card?.title}</th>
          </tr>
          <tr>
            <td>ID :{card?.id}</td>
          </tr>
          <tr>
            <td>COMMENTS :</td>
            <td>{card?.comments}</td>
          </tr>
        </CardBox>
        <div>
          <input
            type="text"
            placeholder="ID"
            value={targetId}
            onChange={(e) => {
              setTargetId(e.target.value)
            }}
          />
          <input
            type="text"
            placeholder="수정값 입력"
            value={editTitle}
            onChange={(e) => {
              setEditTitle(e.target.value)
            }}
          />
          <input
            type="text"
            placeholder="수정커맨트 입력"
            value={editComments}
            onChange={(e) => {
              setEditComments(e.target.value)
            }}
          />
        </div>
        <ButtonBox>
          <Button type="button" backgroundColor="hotpink" onClick={() => onClickEditButtonHandler(targetId, edit)}>
            수정하기
          </Button>
          <Button type="button" onClick={removeCardHandlerButton} backgroundColor="hotpink">
            삭제하기
          </Button>
        </ButtonBox>
      </DetailContainer>
    </>
  )
}

export default DetailBox

const DetailContainer = styled.div`
  border: 1px solid hotpink;
  height: 500px;
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CardBox = styled.table`
  border: 2px dotted blueviolet;
  height: 450px;
  width: 400px;
`

const ButtonBox = styled.div`
  background-color: hotpink;
`
