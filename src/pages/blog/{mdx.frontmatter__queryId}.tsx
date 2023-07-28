import * as React from "react";
import Layout from "@src/components/layout";
import Seo from "@src/components/Seo";
import {graphql, PageProps} from "gatsby";
import {MDXProvider} from "@mdx-js/react";
import PrismSyntaxHighlight from "@src/components/prism-syntax-highlight";
import {Components} from "@mdx-js/react/lib";
import {useContext} from "react";
import {ThemeContext} from "@src/components/ThemeContextWrapper";
import {themes} from "prism-react-renderer";

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
        return <PrismSyntaxHighlight className={className}>{children}</PrismSyntaxHighlight>;

    }
};

const BlogPost: React.FC<BlogPostProps> = (props) => {
    const {data, children} = props;

    if (!data.mdx || !data.mdx.frontmatter) return null;
    const frontmatter = data.mdx.frontmatter;
    return (
        <Layout pageTitle={frontmatter.title as string}>
            <p>{frontmatter.date}</p>
            <MDXProvider components={components as Components}>
                {children}
            </MDXProvider>
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

export const Head = () => <Seo title="Super Cool Blog Posts"/>;

export default BlogPost;