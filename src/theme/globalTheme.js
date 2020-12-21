import React from "react"
import { Global, css } from "@emotion/core"
import { Breakpoints } from "easy-as-pie-ui"
import { Colors } from "./../theme/colors"

export const GlobalTheme = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css?family=Maven+Pro");
      @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

      html {
        font-family: "Source Sans Pro", sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        color: ${Colors.black};
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: "Maven Pro", sans-serif;
        margin-top: 0;
        color: ${Colors.white};
        text-align: left;
      }

      h1 {
        font-size: 36px;
        margin-bottom: 30px;

        ${Breakpoints["large-up"]} {
          font-size: 60px;
          text-align: center;
        }
      }

      h2 {
        font-size: 36px;
        margin-bottom: 35px;

        ${Breakpoints["large-up"]} {
          font-size: 42px;
          text-align: center;
        }
      }

      h3 {
        font-size: 28px;
        margin-bottom: 15px;

        ${Breakpoints["large-up"]} {
          font-size: 36px;
        }
      }

      h4 {
        font-size: 24px;
        margin-bottom: 0;
      }

      h5 {
        font-size: 18px;
        margin-bottom: 0;
      }

      p,
      a {
        font-size: 16px;
        margin-bottom: 15px;
        text-align: left;

        &.legal {
          font-size: 10px;
          color: #7d8086;
        }
      }

      .hero {
        height: 100%;
        width: 100%;
      }

      .side-by-side {
        max-width: 225px;

        ${Breakpoints["large-up"]} {
          max-width: 456px;
        }
      }

      .logo {
        max-width: 200px;
      }
    `}
  />
)
