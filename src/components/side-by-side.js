import React from "react"
import PropTypes from 'prop-types'
import styled from "@emotion/styled"

const Container = styled.section`
  padding: 90px;
  background-color: #F6F6F6;

  &.white-bg {
    background-color: white;
  }
`

const Constraint = styled.section`
  max-width: 1032px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`

const ContentContainer = styled.div`
  flex-basis: auto;
  width: 50%;
`

const ImageContainer = styled.div`
  flex-basis: auto;
  width: 50%;
`

const SideBySide = ({children, img, imgAlt, containerClasses}) => (
  <Container className={containerClasses}>
    <Constraint>
      <ImageContainer>
        <img src={img} alt={imgAlt} />
      </ImageContainer>
      <ContentContainer>
        {children}
      </ContentContainer>
    </Constraint>
  </Container>
)

SideBySide.propTypes = {
  children: PropTypes.node.isRequired,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  containerClasses: PropTypes.string
}

export default SideBySide
