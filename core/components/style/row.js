import React from "react"
import styled from "@emotion/styled"

const StyledRow = styled.section`
  max-width: 1032px;
  margin: 0 auto;

  &.flex {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

// TODO Find a better way than using style
const Row = ({children, flexRow = false}) => (
  <StyledRow className={ flexRow && "flex" }>
    {children}
  </StyledRow>
)

export default Row;

