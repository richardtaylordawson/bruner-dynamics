import React from "react"
import styled from "@emotion/styled"

import SideBySideImg from "../images/devices.png"

const Container = styled.section`
  background-color: #F6F6F6;
  color: #202E39;
  padding: 90px 28rem;
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

const SideBySide = () => (
  <Container>
    <ImageContainer>
      <img src={SideBySideImg} alt="" />
    </ImageContainer>
    <ContentContainer>
      <h3>We’re Here to Brand<br/>Everything, Everywhere,<br/> Anytime</h3>
      <p>Flat screen tv? Wireless device? Tablet? Laptop? We can put our brand image on all of them. We can do it whenever we want, but mostly you’ll see our logo on your screen when you’re experiencing technical difficulties. This way, you will associate  our brand with some of your most emotional moments.</p>
    </ContentContainer>
  </Container>
)

export default SideBySide
