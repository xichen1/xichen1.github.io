import {GatsbyImage} from "gatsby-plugin-image";
import React from "react";
import {graphql, useStaticQuery} from "gatsby";

const CopyRight = () => {
    const data = useStaticQuery(graphql`
    query {
      icon: file(absolutePath: { regex: "/images/icon.png/" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 25)
          }
      }
    }`);

    return (
        <div className="flex items-center justify-center">
            © {new Date().getFullYear()}, Built with&nbsp;
            <a href="https://www.gatsbyjs.com/">Gatsby</a> &nbsp;
            <GatsbyImage alt={`copyright`} image={data.icon.childImageSharp.gatsbyImageData}/>
        </div>
    )
}

export default CopyRight;
