import type {GatsbyConfig} from "gatsby";

require("dotenv").config({
    path: `.env`,
})

const config: GatsbyConfig = {
    siteMetadata: {
        title: `PPX Blog`,
        siteUrl: `https://blog.ppxa.link`,
        description: `This is Xichen Pan's blog.`,
        author: {
            name: `Xichen Pan`,
            summary: `who lives in Vancouver.`,
        },
        social: {
            twitter: `GbdPpx`,
            github: `xichen1`
        },
    },
    flags: {
        DEV_SSR: true
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    "@src": "src",
                },
                extensions: [
                    "js", "jsx", "ts", "tsx"
                ],
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/assets/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `files`,
                path: `${__dirname}/assets/files`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-use-dark-mode',
            options: {
                classNameDark: 'dark',
                classNameLight: 'light',
                storageKey: 'darkMode',
                minify: true,
            },
        },
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://blog.ppxa.link/',
                sitemap: 'https://blog.ppxa.link/sitemap-index.xml',
                policy: [{userAgent: '*', allow: '/'}]
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "assets/images/profile-pic.png"
            }
        },
        'gatsby-plugin-pnpm'
    ]
};

export default config;
