import * as React from "react";
import type {PageProps} from "gatsby";
import Layout from "@src/components/layout";
import Seo from "@src/components/Seo";
import BlogList from "@src/components/BlogList";
import Bio from "@src/components/Bio";
import Weather from "@src/components/Footer/Weather";
import Footer from "@src/components/Footer/Footer";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout pageTitle="mainpage">
            <main>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        <div className="space-y-2 pt-6 pb-2 md:space-y-5 flex-none">
                            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100
                sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 pb-4">All Post</h1>
                            <Bio />
                        </div>
                    </div>
                    <BlogList/>
                    <Footer />
            </main>
        </Layout>
    );
};

export default IndexPage;


export const Head = () => {
    return (
        <>
            <html lang="en" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/qweather-icons@1.4.0/font/qweather-icons.css"/>
            <Seo title="Home Page"/>
        </>
    )
}
