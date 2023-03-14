import React from 'react'
import { BsFillArrowThroughHeartFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px dotted hotpink',
        borderRadius: '20px',
        padding: '20px',
        alignItems: 'center',
      }}
    >
      <BsFillArrowThroughHeartFill
        style={{
          color: 'hotpink',
          fontSize: '40px',
        }}
        onClick={() => {
          navigate('/')
        }}
      />
      <div
        style={{
          color: 'hotpink',
          fontSize: '30px',
        }}
      >
        오덕모여
      </div>
    </div>
  )
}

export default Header
