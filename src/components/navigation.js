import React, { Component } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { colors, breakpoints, constraint } from "../theme/index"

import LightLogo from "../images/logo-white.png"
import DarkLogo from "../images/logo-dark.png"

const NavBar = styled.section`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  ${breakpoints["medium-down"]} {
    height: 50px;
    .nav-item-container, .nav-cta-container { display: none; }
    .nav-logo img { height: 35px; }
    .nav-mobile-container { display: block; }
  }
  .nav-link { margin: 0; }
  &.light {
    background-color: ${colors.transparent};
    .nav-link { color: ${colors.white}; }
  }
  &.dark {
    background-color: ${colors.white};
    box-shadow: 0 2px 2px -2px ${colors.boxShadow};
    .nav-link { color: ${colors.blue} }
  }
`

const NavContainer = styled.nav`
  ${constraint}
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .nav-logo {
    margin: 0;
    ${breakpoints["medium-down"]} {
      padding-left: 14px;
    }
  }
  .nav-item {
    list-style: none;
    padding: 10px;
    display: inline;
  }
`;

class Navigation extends Component {
  state = { topOfPageOrMobile: "" } // set in componentDidMount

  setNavState() {
    const currentNavState = (document.documentElement.scrollTop === 0 && (window.innerWidth >= 1024));

    // only setting the state if it has changed so render isn't called so much
    if((currentNavState) !== this.state.topOfPageOrMobile) {
      this.setState({ topOfPageOrMobile: currentNavState })
    }
  }

  componentDidMount() {
    this.setNavState();
    document.addEventListener("scroll", () => this.setNavState())
    window.addEventListener("resize", () => this.setNavState())
  }

  render() {
    return (
      <NavBar className={this.state.topOfPageOrMobile ? "light" : "dark"}>
        <NavContainer>
          <NavLinks>
            <Link className="nav-logo" to="/"><img src={this.state.topOfPageOrMobile ? LightLogo : DarkLogo} alt="Bruner Dynamics Logo"/></Link>
            <ul className="nav-item-container">
              <li className="nav-item"><Link className="nav-link" to="/">Plans</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/">Speeds</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/">About Brüner Dynamics</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/">Equipment</Link></li>
            </ul>
          </NavLinks>
          <div className="nav-cta-container">
            <a href="tel:18888888888"><h4 className="nav-link">Call Now 1.888.888.8888</h4></a>
          </div>
        </NavContainer>
      </NavBar>
    )
  }
}

export default Navigation
