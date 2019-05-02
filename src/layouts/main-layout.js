import React from "react"
import PropTypes from "prop-types"

// import Navigation from "./navigation"
// import Footer from "./footer"
import GlobalTheme from "../theme/global"

const MainLayout = ({ children }) => (
  <>
    <GlobalTheme />
    {/* <header><Navigation /></header> */}
    <main>{children}</main>
    {/* <footer><Footer /></footer> */}
  </>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
