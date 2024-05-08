import { getCollection } from "astro:content";

import type { Post, Headings, HeadingStructure } from "./types";

type PostPubDate = { pubDate: Post["pubDate"] };

export const getCategories = async () => {
  const posts = await getCollection("blogPosts");
  const categories = new Set(posts.map((post) => post.data.category));

  return Array.from(categories);
};

export const getPosts = async (max?: number) => {
  return (await getCollection("blogPosts"))
    .sort(
      (a: { data: PostPubDate }, b: { data: PostPubDate }) =>
        b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    )
    .slice(0, max);
};

export const formatTableOfContents = (headings: Headings[]) => {
  let formattedTable: HeadingStructure[] = [];
  const subHeadingsMap = new Map();

  headings.forEach((heading) => {
    let parentHeading = { ...heading, subHeadings: [] };
    subHeadingsMap.set(heading.depth, parentHeading);

    if (heading.depth === 1 || heading.depth === 2) {
      formattedTable.push(parentHeading);
    } else {
      subHeadingsMap.get(heading.depth - 1).subHeadings.push(heading);
    }
  });

  return formattedTable;
};

export const formatTimestamp = (timestamp: number) => {
  const dateFormat = new Date(timestamp)
  return dateFormat.toLocaleDateString('en-GB')
}
