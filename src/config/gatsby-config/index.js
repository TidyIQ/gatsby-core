/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/camelcase */

/**
 * Configure site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require("path");

module.exports = {
  /**
   * Site meta data
   *
   * See: https://www.gatsbyjs.org/docs/gatsby-config/#sitemetadata
   */
  siteMetadata: {
    siteUrl: `https://www.tidy-iq.com` // USER CONFIG
  },
  /**
   * Plugins
   *
   * See: https://www.gatsbyjs.org/plugins/
   */
  plugins: [
    {
      resolve: `gatsby-plugin-compile-es6-packages` /* See: https://www.gatsbyjs.org/packages/gatsby-plugin-compile-es6-packages/ */,
      options: {
        modules: [`@tidyiq/gatsby-core`]
      }
    },
    {
      resolve: `gatsby-plugin-layout` /* See: https://www.gatsbyjs.org/packages/gatsby-plugin-layout */,
      options: {
        component: require.resolve(
          __dirname,
          `node_modules`,
          `@tidyiq`,
          `gatsby-core`,
          `contexts`,
          `index.js`
        )
      }
    },
    `gatsby-plugin-material-ui` /* See: https://www.gatsbyjs.org/packages/gatsby-plugin-material-ui/ */,
    `gatsby-plugin-offline` /* See: https://www.gatsbyjs.org/packages/gatsby-plugin-offline/ */,
    {
      resolve: `gatsby-plugin-manifest` /* See: https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/ */,
      options: {
        name: `GatsbyJS`, // USER CONFIG
        short_name: `GatsbyJS`, // USER CONFIG
        start_url: `/`,
        background_color: `#f7f0eb`, // USER CONFIG
        theme_color: `#a2466c`, // USER CONFIG
        display: `standalone`,
        icon: `src/images/favIcon.png`,
        theme_color_in_head: false
      }
    },
    `gatsby-plugin-react-helmet` /* See: https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/ */,
    /**
     * 'gatsby-transformer-sharp' and 'gatsby-plugin-sharp' required by 'gatsby-image'
     *
     * See: https://www.gatsbyjs.org/docs/gatsby-image/
     */
    `gatsby-transformer-sharp` /* See: https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/ */,
    {
      resolve: `gatsby-plugin-sharp` /* See: https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/ */,
      options: {
        useMozJpeg: true
      }
    },
    `gatsby-plugin-typescript` /* See: https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/ */,
    {
      resolve: `gatsby-source-filesystem` /* See: https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ */,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    }
  ]
};
