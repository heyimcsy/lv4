import React from 'react'
import { useState } from 'react'
import RightMarginBox from '../common/RightMarginBox'
import Button from '../common/Button'

function Input() {
  // 컴포넌트 내부에서 사용할 state(제목, 코멘트)
  const [title, setTitle] = useState('')
  const [comments, setComments] = useState('')

  // title의 변경을 감지하는 함수
  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value)
  }

  // comment의 변경을 감지하는 함수
  const onChangeCommentsHandler = (e) => {
    setComments(e.target.value)
  }

  return (
    <div>
      <form>
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
