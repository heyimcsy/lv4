import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'

// 추가하기 버튼을 누르면 갱신되는 이유가 리렌더링 때문인가?
function CardList() {
  // // 서버-store 연결 or 서버 직접 연결
  // const cards = useSelector((state) => state.cards);

  // useState 초깃값이 왜 null?
  const [cards, setCards] = useState(null)

  const fetchCards = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_URL_WEBTOON}/webtoon`)
    setCards(data)
  }

  // dependence array에 card 넣어줬더니 무한반복 ㅠ
  useEffect(() => {
    fetchCards()
  }, [])

  console.log('axios cards ->', cards)

  return (
    <div>
      {cards?.map((card) => {
        return <Card key={card.id} card={card} />
      })}
    </div>
  )
}

export default CardList
