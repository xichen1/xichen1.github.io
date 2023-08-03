import React from "react";
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }: {title: string}) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          social {
            twitter
          }
        }
      }
    }
  `)

    const metaData = data.site.siteMetadata
    return (
        <>
            <title>{`${title} | ${metaData.title}`}</title>
            <meta name="description" content={metaData.description} />
            <meta name="twitter:title" content={`${title} | ${metaData.title}`} />
            <meta name="twitter:description" content={metaData.description} />
            <meta name="twitter:creator" content={metaData.social.twitter} />
        </>
    )
}

export default Seo