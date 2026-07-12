module.exports = {
  siteMetadata: {
    siteUrl: `https://bruner-dynamics.richardtaylordawson.com`, // for gatsby-plugin-sitemap
    title: `Bruner Dynamics`,
    description: `Demo website built using Gatsby, React & Emotion CSS`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
