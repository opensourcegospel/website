module.exports = {
  siteMetadata: {
    title: "OpenSource Gospel | Helping to spread the Gospel through the use of free and open source software",
    author: "OpenSourceGospel",
    description: "At OpenSourceGospel we hope to harness the power of open source software to build tools that will aid in the distribution of the Gospel"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
