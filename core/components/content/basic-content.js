import React from "react"
import PropTypes from "prop-types"

import Container from "./../style/container"
import Row from "./../style/row"

const BasicContent = ({children, bgColor, bgImage}) => (
  <Container bgColor={bgColor} bgImage={bgImage}>
    <Row>
      {children}
    </Row>
  </Container>
)

BasicContent.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  bgImage: PropTypes.string
}

export default BasicContent
