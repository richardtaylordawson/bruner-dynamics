import React from "react"
import styled from "@emotion/styled"

const StyledContainer = styled.section`
  padding: 60px 7.5px;
  background-color: ${props => props.bgColor ? props.bgColor : "white"};
  background-image: url(${props => props.bgImage ? props.bgImage: ""});
  background-size: cover;
`

// TODO Find a better way than using style
const Container = ({children, bgColor, bgImage}) => (
  <StyledContainer bgColor={bgColor} bgImage={bgImage}>
    {children}
  </StyledContainer>
)

export default Container;
