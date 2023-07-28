import React from "react";
import {Link} from "gatsby";

const BlogListItem = ({node}: { node: Queries.Mdx }) => {
    const {id, frontmatter} = node;
    return (
        <li key={id} className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <div>
                    <p className="text-base font-medium leading-6 text-teal-500">
                        {frontmatter?.date}
                    </p>
                </div>
                <Link to={`/blog/${frontmatter?.queryId}`} className="space-y-3 xl:col-span-3">
                    <div>
                        <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                            {frontmatter?.title}
                        </h3>
                    </div>
                    <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                        {frontmatter?.description}
                    </p>
                </Link>
            </article>
        </li>
    );
};

export default BlogListItem;