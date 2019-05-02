import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

const StyledAccordion = styled.div`
  background-color: white;
  text-align: center;
  border-radius: 20px;
`

const Header = styled.div`
  background-color: ${props => props.headerColor ? props.headerColor: "white"};
  padding: 10px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`

const Content = styled.div`
  padding: 50px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`

const Accordion = ({children, headerColor}) => (
  <StyledAccordion>
    <Header headerColor={headerColor}>{children[0]}</Header>
    <Content>{children[1]}</Content>
  </StyledAccordion>
)

Accordion.propTypes = {
  children: PropTypes.node.isRequired
}

export default Accordion
