import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

const Test = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledColumn = styled.div`
  width: ${props => 100 / props.numberOfColumns};
  margin: 30px;
`

const Columns = ({children}) => (
  <Test>
    {
      children.map((child, index, children) => (
        <StyledColumn key={index} numberOfColumns={children.length}>
          {child}
        </StyledColumn>
      ))
    }
  </Test>
)

Columns.propTypes = {
  children: PropTypes.node.isRequired
}

export default Columns
