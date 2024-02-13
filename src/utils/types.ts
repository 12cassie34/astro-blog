export enum BLOG_CATEGORIES {
    "All" = "all",
    "Blog Post" = "blog-post",
    "Learning Diary" = "learning-diary"
};

export interface Post {
    title: string,
    category: BLOG_CATEGORIES,
    subtitle?: string,
    tags?: string[],
    poster?: string,
    relatedPosts: string[],
    pubDate: number,
}

export type Depth = 1 | 2 | 3 | 4 | 5 | 6;

export interface Headings {
    depth: Depth;
    slug: string;
    text: string;
}

export interface HeadingStructure extends Headings {
    subHeadings: HeadingStructure[];
}