import React from "react"
import PropTypes from "prop-types"
import { EasyAsPieUITheme } from "easy-as-pie-ui"
import { Colors } from "./../theme/colors"
import { GlobalTheme } from "./../theme/globalTheme"
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"

export const MainLayout = ({ children }) => (
  <>
    <EasyAsPieUITheme colors={Colors} />
    <GlobalTheme />
    <header>
      <Navigation />
    </header>
    <main>{children}</main>
    <footer>
      <Footer />
    </footer>
  </>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
