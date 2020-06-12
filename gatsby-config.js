module.exports = {
  siteMetadata: {
    title: `Byron Warner Portfolio Site`,
    description: `I decided to build a site the describes some of the projects I've been apart.`,
    author: `@bewarned`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
    "gatsby-plugin-emotion",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
