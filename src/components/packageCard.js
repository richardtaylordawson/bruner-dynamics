import React, { Component } from "react"
import styled from "@emotion/styled"
import { Breakpoints } from "easy-as-pie-ui"
import { Colors } from "../theme/colors"
import DollarSign from "./images/dollar-sign.png"
import MediaPlayer from "./images/media-player.png"
import Hands from "./images/hands.png"

export class PackageCard extends Component {
  state = { open: true } // set in componentDidMount

  setPackageCard({ newState = null }) {
    this.setState((prevState) => ({
      open: newState ? newState : !prevState.open,
    }))
  }

  toggle() {
    if (window.innerWidth >= 1024 && this.state.open === false) {
      this.setPackageCard(true)
    } else if (window.innerWidth <= 1024 && this.state.open === true) {
      this.setPackageCard(false)
    }
  }

  componentDidMount() {
    this.toggle()
    window.addEventListener("resize", () => this.toggle())
  }

  render() {
    return (
      <Container>
        <Header className="header">
          <p className="name">
            PAMANTHA{" "}
            <span
              className="text-black"
              style={{ float: "right", fontWeight: "bolder" }}
              onClick={this.setPackageCard.bind(this)}
            >
              <span className="d-none-lg-up">
                {this.state.open ? "SHOW LESS" : "SHOW MORE"}
              </span>
            </span>
          </p>
          <h3 className="price text-black">
            30
            <span className="small">
              <sup>00</sup>/mo
            </span>
          </h3>
          <p className="legal">$5/mo after we’re best friends</p>
        </Header>
        <Options className={!this.state.open && "hidden"}>
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
        <Footer className="footer">
          <p>ORDER THE PAMANTHA</p>
          <h5>1.888.888.8888</h5>
        </Footer>
      </Container>
    )
  }
}

const Container = styled.div`
  padding: 15px;
  border-left: 1px solid ${Colors.grey};
  cursor: pointer;

  &:hover {
    ${Breakpoints["large-up"]} {
      transition: 0.3s all;
      transform: translate(0, -5px);
      box-shadow: 0 2px 5px ${Colors.black};
    }

    .name {
      color: ${Colors.green};
    }
    .header {
      border-bottom: 1px solid ${Colors.green};
    }
    .footer {
      background-color: ${Colors.green};
    }
  }

  ${Breakpoints["medium-down"]} {
    box-shadow: 0 4px 8px ${Colors.black};
  }
`

const Header = styled.div`
  &.header {
    border-bottom: 1px solid ${Colors.blue};
  }

  .name {
    font-size: 12px;
    color: ${Colors.blue};
    margin-bottom: 15px;
  }

  .price {
    margin-bottom: 0;

    .small {
      font-size: 20px;
    }
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
    font-size: 10px;
    margin-bottom: 0;
  }
`

const Footer = styled.div`
  &.footer {
    color: white;
    padding: 12px 20px;
    background-color: ${Colors.blue};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  p {
    color: ${Colors.white};
    margin: 0;
  }
`
