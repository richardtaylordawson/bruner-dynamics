import React, { Component } from "react"
import styled from "@emotion/styled"

import { colors } from "./../theme/"

import DollarSign from "./images/dollar-sign.png"
import MediaPlayer from "./images/media-player.png"
import Hands from "./images/hands.png"

const Container = styled.div`
  margin: 0 0 30px 0;
  padding: 30px;
  border-left: 1px solid ${colors.borderGray};
  cursor: pointer;

  &:hover {
    transition: 0.3s all;
    transform: translate(0, -5px);
    box-shadow: 0 12px 16px ${colors.darkGray};
  }
`

const Header = styled.div`
  border-bottom: 1px solid ${colors.blue};

  .name {
    font-size: 12px;
    color: ${colors.blue};
    margin-bottom: 15px;
  }

  .price {
    margin-bottom: 0;

    .small { font-size: 20px; }
  }

  .legal {
    font-size: 14px;
    color: ${colors.lightGray};
  }
`

const Options = styled.div`
  margin: 30px 0;

  .option {
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;

    .icon {
      margin: 5px 10px 0 0;
    }
  }

  .title {
    margin-bottom: 0;
  }

  .legal {
    color: ${colors.lightGray};
    font-size: 10px;
    margin-bottom: 0;
  }
`

const Footer = styled.div`
  color: white;
  padding: 12px 20px;
  background-color: ${colors.blue};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  p {
    color: ${colors.white};
    margin: 0;
  }
`

class PackageCard extends Component {
  render () {
    return (
      <Container>
        <Header>
          <p className="name">PAMANTHA</p>
          <h3 className="price">30<span className="small"><sup>00</sup>/mo</span></h3>
          <p className="legal">$5/mo after we’re best friends</p>
        </Header>
        <Options>
          <div className="option">
            <div>
              <img className="icon" src={DollarSign} alt="Dollar sign" />
            </div>
            <div>
              <p className="title">Free Change Service</p>
              <p className="legal">Need to break a $20? We can help.</p>
            </div>
          </div>
          <div className="option">
            <div>
              <img className="icon" src={MediaPlayer} alt="Media player" />
            </div>
            <div>
              <p className="title">Video Suggestions</p>
              <p className="legal">We’ll send you hilarious youtube clips</p>
            </div>
          </div>
          <div className="option">
            <div>
              <img className="icon" src={Hands} alt="Hands" />
            </div>
            <div>
              <p className="title">Complimentary Claps</p>
              <p className="legal">Included at no additional cost</p>
            </div>
          </div>
        </Options>
        <Footer>
          <p>ORDER THE PAMANTHA</p>
          <h5>1.888.888.8888</h5>
        </Footer>
      </Container>
    )
  }
}

export default PackageCard
