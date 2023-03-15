import React from 'react'
import { useState } from 'react'
import RightMarginBox from '../common/RightMarginBox'
import Button from '../common/Button'
import nextId from 'react-id-generator'
import axios from 'axios'

function Input() {
  const id = nextId()

  // 컴포넌트 내부에서 사용할 state(제목, 코멘트)
  const [title, setTitle] = useState('')
  const [comments, setComments] = useState('')

  //title의 변경을 감지하는 함수
  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value)
  }

  //comment의 변경을 감지하는 함수
  const onChangeCommentsHandler = (e) => {
    setComments(e.target.value)
  }

  const getErrorMsg = (errorCode, parmas) => {
    switch (errorCode) {
      case '01':
        return alert(
          `[필수 입력 값 검중 실패 안내]\n\n제목과 내용은 모두 입력돼야 합니다. 입력값을 확인해주세요. \n입력된 값(제목 : '${parmas.title}', 내용 : '${parmas.comments}')`
        )
    }
  }

  // const onSubmitHandler = (e) => {
  //   //새로고침을 막아주는 기능
  //   e.preventDefault()

  //   // 제목과 내용이 모두 존재해야만 정상처리(하나라도 없는 경우 오류 발생)
  //   // "01" : 필수 입력값 검증 실패 안내
  //   if (!title || !comments) {
  //     return getErrorMsg('01', { title, comments })
  //   }

  //   const newcard = {
  //     id: id,
  //     title,
  //     comments,
  //   }

  //   // card를 추가하는 reducer 호출
  //   // 인자 : payload
  //   dispatch(addCard(newcard))

  //   // state 두 개를 초기화
  //   setTitle('')
  //   setComments('')
  // }
  const onSubmitHandler = async (e) => {
    // //새로고침을 막아주는 기능
    e.preventDefault()

    // 제목과 내용이 모두 존재해야만 정상처리(하나라도 없는 경우 오류 발생)
    // "01" : 필수 입력값 검증 실패 안내
    if (!title || !comments) {
      return getErrorMsg('01', { title, comments })
    }

    const newCard = {
      title,
      comments,
      id,
    }

    await axios.post(`${process.env.REACT_APP_URL_WEBTOON}/webtoon`, newCard)

    // state 두 개를 초기화
    setTitle('')
    setComments('')
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <RightMarginBox margin={10}>
          <label>컨텐츠 제목</label>
          <input id="title" placeholder="컨텐츠 제목을 입력해주세요." onChange={onChangeTitleHandler} />
          <label>컨텐츠 평가</label>
          <input id="comments" placeholder="컨텐츠에 대한 평가를 입력해주세요." onChange={onChangeCommentsHandler} />
        </RightMarginBox>
        <Button type="submit" backgroundColor="hotpink">
          평가완료
        </Button>
      </form>
    </div>
  )
}

export default Input
