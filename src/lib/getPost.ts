import {graphql, useStaticQuery} from "gatsby";

// const postsDir = path.join(process.cwd(), "posts");
//
// const getPostInfo = (fileName: string): matter.GrayMatterFile<string> => {
//     // get .md file name
//     const fileNameWithExt = fileName + ".md";
//
//     // read md file as string
//     const fullPath = path.join(postsDir, fileName, fileNameWithExt);
//     const fileText = fs.readFileSync(fullPath, 'utf-8');
//
//     // parse the metadata part of md file, which  is in yaml format
//     return matter(fileText);
// };

export const getPostsData = () => {
    return useStaticQuery(graphql
        `query {
        allMdx(sort: {frontmatter: {date: DESC}}) {
            nodes {
                frontmatter {
                    date
                    description
                    title
                    queryId
                }
                id
            }
        }
    }`);
};

// export const getPostsContent = (fileName: string) => {
//     const matterResult = getPostInfo(fileName);
//
//     // TODO: add tags ...
//     const blogPostContent: BlogPostContent = {
//         id: fileName,
//         date: matterResult.data.date,
//         title: matterResult.data.title,
//         description: matterResult.data.description,
//         content: matterResult.content
//     };
//     return blogPostContent;
// };