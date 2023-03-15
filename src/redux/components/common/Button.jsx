import React from 'react'
import styled from 'styled-components'

function Button({ backgroundColor, children }) {
  return <StyleButton backgroundColor={backgroundColor}>{children}</StyleButton>
}

export default Button

const StyleButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
  border: none;
  color: white;
`
