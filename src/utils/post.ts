import { getCollection } from 'astro:content';

import type { Post } from './types';

type PostPubDate = { pubDate: Post["pubDate"] }

export const getCategories = async () => {
	const posts = await getCollection('blogPosts');
	const categories = new Set(posts.map((post) => post.data.category));

	return Array.from(categories);
}

export const getPosts = async (max?: number) => {
	return (await getCollection('blogPosts'))
		.sort((a: { data: PostPubDate }, b: { data: PostPubDate }) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.slice(0, max)
}