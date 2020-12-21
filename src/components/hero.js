import React from "react"
import styled from "@emotion/styled"
import { Image } from "./../components/gatsby/image"

export const Hero = () => (
  <HeroContainer>
    <BackgroundImage>
      <Image imgName="stars-bg" className="hero" />
    </BackgroundImage>
    <HeroContent className="text-center">
      <h1>
        Discover Brüner Satellite
        <br />
        Internet Bundles
      </h1>
      <p className="text-white mb-lg text-lg-center">
        Jimmy B is here to make the world a better place, one connection at a
        time.
      </p>
    </HeroContent>
  </HeroContainer>
)

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
`

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const HeroContent = styled.div`
  position: relative;
  padding: 100px 15px 45px 15px;
`
