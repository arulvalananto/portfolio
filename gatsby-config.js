/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Arul Valan Anto - Portfolio`,
        siteUrl: `https://arulvalananto.gatsbyjs.io/`,
        description: `This portfolio showcases a collection of my best work in Software Development`,
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
    ],
};
