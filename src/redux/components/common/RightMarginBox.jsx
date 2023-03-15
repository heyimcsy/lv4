import React from 'react'
import styled from 'styled-components'

function RightMarginBox({ margin, children }) {
  return <StyleDiv margin={margin}>{children}</StyleDiv>
}

export default RightMarginBox

const StyleDiv = styled.div`
  margin-right: ${(props) => props.margin}px;
`
