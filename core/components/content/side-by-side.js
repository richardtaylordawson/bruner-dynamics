import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import Container from "./../style/container"
import Row from "./../style/row"

const ContentContainer = styled.div`
  flex-basis: auto;
  width: 50%;
`

const ImageContainer = styled.div`
  flex-basis: auto;
  width: 50%;
`

const SideBySide = ({children, img, imgAlt, bgColor}) => (
  <Container bgColor={bgColor}>
    <Row flexRow={true}>
      <ImageContainer>
        <img src={img} alt={imgAlt} />
      </ImageContainer>
      <ContentContainer>
        {children}
      </ContentContainer>
    </Row>
  </Container>
)

SideBySide.propTypes = {
  children: PropTypes.node.isRequired,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  bgColor: PropTypes.string
}

export default SideBySide
