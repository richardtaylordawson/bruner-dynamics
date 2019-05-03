import React from "react"
import { Global, css } from "@emotion/core"

import { colors } from "./../theme/"

const GlobalTheme = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css?family=Maven+Pro');
      @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

      html {
        font-family: 'Source Sans Pro', sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      body {
        padding: 0;
        margin: 0;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: 'Maven Pro', sans-serif;
        margin-top: 0;
      }

      h1 {
        font-size: 60px;
        text-align: center;
        margin-bottom: 35px;
        color: ${colors.white};
      }

      h2 {
        font-size: 42px;
        text-align: center;
        margin-bottom: 35px;
        color: ${colors.darkBlue};

      }

      h3 {
        font-size: 36px;
        margin-bottom: 15px;
        color: ${colors.darkBlue};
      }

      h4 {
        font-size: 24px;
        margin: 0;
        color: ${colors.white};
      }

      h5 {
        font-size: 18px;
        margin: 0;
        color: ${colors.white};
      }

      p,
      a {
        font-size: 16px;
        margin: 0 0 15px 0;
        color: ${colors.darkBlue};
      }

      a {
        text-decoration: none;
      }

      .legal {
        p {
          font-size: 10px;
          color: ${colors.lightGray};
        }
      }

      .text-blue {
        color: ${colors.blue}
      }
    `}
  />
)

export default GlobalTheme
