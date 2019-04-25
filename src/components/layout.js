import React from "react"
import PropTypes from "prop-types"
import Navigation from "./navigation"
import "./global.css"

const Layout = ({ children }) => (
  <div>
    <header><Navigation /></header>
    <main>{children}</main>
    <footer>This is the footer</footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
