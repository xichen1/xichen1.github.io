/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Bio = () => {
    const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/images/profile-pic.png/" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 50)
          }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
          }
        }
      }
    }
  `)

    const { author, social } = data.site.siteMetadata
    return (
        <div className="flex mt-14">
            <GatsbyImage
                image={data.avatar.childImageSharp.gatsbyImageData}
                alt={author.name}
                style={{
                    marginRight: 5,
                    marginBottom: 0,
                    minWidth: 50,
                    borderRadius: `100%`,
                }}
                imgStyle={{
                    borderRadius: `50%`,
                }}
            />
            <div className="ml-3">
                <span className="mb-3">Written by <strong>{author.name}</strong> {author.summary}<br/></span>
                You can follow him on&nbsp;
                <a href={`https://twitter.com/${social.twitter}`}
                   className="underline font-bold" target="_blank">
                    Twitter
                </a>
                &nbsp;OR&nbsp;
                <a href={`https://github.com/${social.github}`}
                   className="underline font-bold" target="_blank">
                    Github
                </a>
                .
            </div>
        </div>
    )
}

export default Bio
