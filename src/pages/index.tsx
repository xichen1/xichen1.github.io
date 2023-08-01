import * as React from "react";
import type {PageProps} from "gatsby";
import Layout from "@src/components/layout";
import Seo from "@src/components/Seo";
import BlogList from "@src/components/BlogList";
// import Posts from "@/src/components/Posts";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout pageTitle="mainpage">
            <main>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100
                sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">All Post</h1>
                    </div>
                    <BlogList/>
                </div>
            </main>
        </Layout>
    );
};

export default IndexPage;


export const Head = () => <Seo title="Home Page" />
