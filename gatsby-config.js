module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Carbon',
    description: 'This is a starter-kit (boilerplate) with a dependancy on the carbon design system',
    keywords: 'gatsby, theme, carbon, IBM',
  },
  pathPrefix: `/gatsby-starter-carbon`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Starter Carbon',
        icon: 'src/images/favicon.svg',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        navigationStyle: 'header',
      },
    },
  ],
};
