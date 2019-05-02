import React from "react"
import { Global, css } from '@emotion/core'

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
        color: white;
        margin-top: 0px;
        margin-bottom: 15px;
      }

      h1 {
        font-family: 'Maven Pro', sans-serif;
        font-size: 60px;
        text-align: center;
      }

      h2 {
        font-size: 42px;
        text-align: center;
        color: #202E39;
      }

      h3 {
        font-size: 36px;
        color: #202E39;
      }

      h4 {
        font-size: 24px;
      }

      p,
      a {
        font-size: 16px;
        margin-bottom: 30px;
      }

      a {
        text-decoration: none;
      }
    `}
  />
)

export default GlobalTheme
