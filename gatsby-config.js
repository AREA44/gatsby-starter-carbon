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
        name: 'Gatsby Starter Carbon by AREA44',
        icon: 'src/images/favicon.svg',
        short_name: 'Gatsby Starter Carbon',
        start_url: '/',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        withWebp: true,
      },
    },
  ],
};
