export enum BLOG_CATEGORIES {
    "All" = "all",
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