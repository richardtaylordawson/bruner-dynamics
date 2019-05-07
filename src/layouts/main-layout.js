import React from "react"
import PropTypes from "prop-types"

import Navigation from "./../components/navigation"
// import Footer from "./footer"
import GlobalTheme from "../theme/global"

import { ReactCuttlefishTheme } from "react-cuttlefish"

import { colors } from "./../theme"

const MainLayout = ({ children }) => (
  <>
    <GlobalTheme />
    <ReactCuttlefishTheme theme={colors}/>
    <header><Navigation /></header>
    <main>{children}</main>
    {/* <footer><Footer /></footer> */}
  </>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
