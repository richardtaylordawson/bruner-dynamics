import React from "react"
import styled from "@emotion/styled"
import Zipcode from "../components/zipcode"

import StarsBg from "../images/stars-bg.png"

const HeroSection = styled.section`
  text-align: center;
  color: white;
  background-image: url(${StarsBg});
  background-size: cover;
  background-repeat: no-repeat;
`

const HeroContent = styled.div`
  max-width: 830px;
  margin: auto;
  padding: 103px 0 47px 0;
`

const Hero = () => (
  <HeroSection>
    <HeroContent>
      <h1>Discover Brüner Satellite<br/>Internet Bundles</h1>
      <p>Jimmy B is here to make the world a better place, one connection at a time.</p>
      <Zipcode />
    </HeroContent>
  </HeroSection>
)

export default Hero
