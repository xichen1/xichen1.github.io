import {graphql, Link, useStaticQuery} from "gatsby";
import ThemeBtn from "./ThemeBtn";
import React from "react";

const NavBar = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return(
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex justify-between items-center w-full">
                    <Link to="/">
                        <h2 className="text-2xl font-medium">
                            PPX <span className="text-teal-500">Blog</span>
                        </h2>
                    </Link>
                    <ThemeBtn />
                </div>
            </div>
        </div>
    )
};

export default NavBar;