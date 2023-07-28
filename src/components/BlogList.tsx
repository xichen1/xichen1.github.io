import * as React from "react";
import {getPostsData} from "@src/lib/getPost";
import BlogListItem from "@src/components/BlogListItem";

const BlogPage = () => {
    const data = getPostsData();
    return (
        <ul>
            {
                data.allMdx.nodes.map((node: Queries.Mdx) => (<BlogListItem key={node.id} node={node}/>))
            }
        </ul>
    );
};

export default BlogPage;