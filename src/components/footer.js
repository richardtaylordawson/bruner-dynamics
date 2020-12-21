import React from "react"
import styled from "@emotion/styled"
import { Breakpoints } from "easy-as-pie-ui"
import { Image } from "./gatsby/image"
import FooterImg from "../images/footer.png"

export const Footer = () => (
  <FooterContainer>
    <section className="center-block content-lg pt-xl">
      <Image imgName="logo-dark-large" className="mb-sm logo" />
      <GreenLine className="bc-green mb-sm"></GreenLine>
      <h4 className="text-dark mb-sm">
        Order Now <br />
        <strong>1.888.888.8888</strong>
      </h4>
      <p className="legal">
        © 2018. All rights reserved Privacy Policy | Terms & Conditions
      </p>
    </section>
  </FooterContainer>
)

const FooterContainer = styled.div`
  background-image: url(${FooterImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  padding-left: 15px;
  height: 375px;

  ${Breakpoints["medium-up"]} {
    height: 550px;
  }
  ${Breakpoints["large-up"]} {
    height: 720px;
  }
`

const GreenLine = styled.div`
  border-width: 1px;
  border-style: solid;
  max-width: 250px;
`
