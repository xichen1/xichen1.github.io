declare module 'gatsby-plugin-dark-mode';

type BlogPost = {
    id: string,
    title: string,
    date: string,
    description: string,
    // TODO: add tags ...
}

type BlogPostContent = BlogPost & { content: string }