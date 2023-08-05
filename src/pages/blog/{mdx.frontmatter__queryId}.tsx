import * as React from "react";
import Layout from "@src/components/layout";
import Seo from "@src/components/Seo";
import {graphql, PageProps} from "gatsby";
import {MDXProvider} from "@mdx-js/react";
import PrismSyntaxHighlight from "@src/components/prism-syntax-highlight";
import {Components} from "@mdx-js/react/lib";
import Footer from "@src/components/Footer/Footer";

type BlogPostProps = PageProps & {
    data: {
        mdx: {
            frontmatter: {
                title: string
                date: string
            }
        }
    }
}

const components = {
    code: ({children, className}: { children: string, className: string }) => {
        return className ? <PrismSyntaxHighlight className={className}>{children}</PrismSyntaxHighlight>
            : <code
                className="bg-bg-code-light dark:bg-bg-code-dark text-font-code-light dark:text-font-code-dark">{children}</code>;

    }
};

const BlogPost: React.FC<BlogPostProps> = (props) => {
    const {data, children} = props;

    if (!data.mdx || !data.mdx.frontmatter) return null;
    const frontmatter = data.mdx.frontmatter;
    return (
        <Layout pageTitle={frontmatter.title as string}>
            {/*<p>{frontmatter.date}</p>*/}
            <div>
                <header className="pt-6 xl:pb-6">
                    <div className="text-center space-y-1">
                        <div className="space-y-10">
                            <div>
                                <p className="text-base font-medium leading-6 text-teal-500">{frontmatter.date}</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900
                        dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">{frontmatter.title}</h1>
                        </div>
                    </div>
                </header>
                <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
                    <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                        <div
                            className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg prose-pre:p-0 prose-pre:m-0 prose-pre:bg-transparent">
                            <MDXProvider components={components as Components}>
                                {children}
                            </MDXProvider>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </Layout>
    );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
 `;

export const Head: React.FC<BlogPostProps> = (props) => {
    const {data, children} = props;
    if (!data.mdx || !data.mdx.frontmatter) return null;
    const frontmatter = data.mdx.frontmatter;
    return (
        <>
            <html lang="en"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/qweather-icons@1.4.0/font/qweather-icons.css"/>
            <Seo title={frontmatter.title}/>
        </>
    );

};


export default BlogPost;