import React from "react";
import Seo from "@src/components/Seo";

const AboutPage = () => {
    return (
        <main>
            <h1>About Me</h1>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </main>
    );
};

// TODO: Add meta data, SEO

export default AboutPage;

export const Head = () => <Seo title="About Me" />
