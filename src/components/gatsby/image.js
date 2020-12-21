import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Image = ({ imgName, className }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 1256, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const result = data.allFile.edges.filter(
        (picture) => picture.node.name === imgName
      )

      return (
        <Img
          fluid={result[0].node.childImageSharp.fluid}
          className={className}
        />
      )
    }}
  />
)
