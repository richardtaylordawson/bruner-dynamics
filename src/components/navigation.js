import React, { Component } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { Breakpoints, Button } from "easy-as-pie-ui"
import { InstallButton } from "./installButton"
import { Colors } from "../theme/colors"
import LightLogo from "../images/logo-white.png"
import DarkLogo from "../images/logo-dark.png"
import Bars from "./images/bars.png"

export class Navigation extends Component {
  state = {
    topOfPageOrMobile: "",
    mobileNavOpen: false,
  } // set in componentDidMount

  setNavState() {
    const currentNavState =
      document.documentElement.scrollTop === 0 && window.innerWidth >= 1024

    // only setting the state if it has changed so render isn't called so much
    if (currentNavState !== this.state.topOfPageOrMobile) {
      this.setState({ topOfPageOrMobile: currentNavState })
    }

    if (window.innerWidth >= 1024) {
      this.setState((prevState) => ({
        mobileNavOpen: false,
      }))
    }
  }

  componentDidMount() {
    this.setNavState()
    document.addEventListener("scroll", () => this.setNavState())
    window.addEventListener("resize", () => this.setNavState())
  }

  toggleMobile() {
    this.setState((prevState) => ({
      mobileNavOpen: !prevState.mobileNavOpen,
    }))
  }

  render() {
    return (
      <NavBar className={this.state.topOfPageOrMobile ? "light" : "dark"}>
        <NavContainer>
          <NavLinks>
            <Link className="nav-logo" to="/">
              <img
                src={this.state.topOfPageOrMobile ? LightLogo : DarkLogo}
                alt="Bruner Dynamics Logo"
              />
            </Link>
            <ul className="nav-item-container d-none-md-down">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Plans
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Speeds
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About Brüner Dynamics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Equipment
                </Link>
              </li>
            </ul>
          </NavLinks>
          <div className="nav-cta-container d-none-md-down">
            <a href="tel:18888888888">
              <h4 className="nav-link">Call Now 1.888.888.8888</h4>
            </a>
          </div>
          <InstallButton />
          <div
            className="mobile-nav d-none-lg-up"
            onClick={this.toggleMobile.bind(this)}
          >
            <img src={Bars} alt="Hamburger Menu" />
          </div>
        </NavContainer>
        <div className={`myLinks ${this.state.mobileNavOpen ? "" : "hidden"}`}>
          <p>Plans</p>
          <p>Speeds</p>
          <p>About Brüner Dynamics</p>
          <p>Equipment</p>
        </div>
      </NavBar>
    )
  }
}

const NavBar = styled.section`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 999999;

  .nav-link {
    margin: 0;
  }

  pwa-install::part(openButton) {
    display: none;
  }

  &.light {
    .nav-link {
      color: ${Colors.white};
    }
  }

  &.dark {
    background-color: ${Colors.white};
    box-shadow: 0 2px 2px -2px ${Colors.dark};
    .nav-link {
      color: ${Colors.blue};
    }
  }

  ${Breakpoints["medium-down"]} {
    .nav-logo {
      padding-left: 15px;
    }
    .mobile-nav {
      padding-right: 15px;
    }
  }

  .mobile-nav {
    cursor: pointer;
  }

  .install-btn {
    position: absolute;
    right: 50px;
    top: 12px;

    button {
      padding: 5px 10px;
    }
  }

  .nav-item-container {
    display: flex;
    align-items: center;
    margin: 0;
  }
  ${Breakpoints["medium-down"]} {
    .nav-item-container {
      display: none;
    }
  }

  .myLinks {
    width: 100%;
    background-color: white;

    p {
      color: ${Colors.blue};
      text-decoration: none;
      margin-left: 15px;
      display: block;
      padding: 10px;
      cursor: pointer;
    }
  }
`

const NavContainer = styled.nav`
  max-width: 1032px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const NavLinks = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .nav-logo {
    margin: 0;
  }

  .nav-item {
    list-style: none;
    padding-right: 20px;
  }
`
