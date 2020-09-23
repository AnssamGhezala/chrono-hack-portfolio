module.exports = {
  siteMetadata: {
    siteTitle: 'Anssam Ghezala',
    siteDescription: 'Software Eng. student @McGill, passionate about the web!',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://chronoblog-hacker.now.sh/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Anssam Ghezala',
    authorDescription: 'Software Eng. student @McGill, passionate about the web!', // short text about the author
    avatar: '/avatar.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `linkedin`,
        url: `https://www.linkedin.com/in/anssamghezala/`
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/anssam_ghezala`
      },
      {
        icon: `github`,
        url: `https://github.com/AnssamGhezala`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '⬈ '
            }
          }
        },
        feedSearch: {
          symbol: ''
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Seif Ghezala`,
        short_name: `Seif`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
