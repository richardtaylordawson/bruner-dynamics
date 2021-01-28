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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-142412414-6",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bruner Dynamics`,
        short_name: `Bruner Dynamics`,
        start_url: `/`,
        background_color: `#061833`,
        theme_color: `#061833`,
        display: `standalone`,
        icon: `src/images/favicon.svg`,
        description: `Demo website built using Gatsby, React & Emotion CSS`,
        screenshots: [
          {
            src:
              "https://bruner-dynamics.richardtaylordawson.com/images/screenshots/home.png",
          },
          {
            src:
              "https://bruner-dynamics.richardtaylordawson.com/images/screenshots/faq.png",
          },
          {
            src:
              "https://bruner-dynamics.richardtaylordawson.com/images/screenshots/what-is-a-bruner.png",
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", disallow: "" }],
        sitemap: "https://bruner-dynamics.richardtaylordawson.com/sitemap.xml",
      },
    },
  ],
}
