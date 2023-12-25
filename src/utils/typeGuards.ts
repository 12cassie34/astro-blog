import type { BLOG_CATEGORIES } from './types';

export const isBlogCategories = (data: unknown): data is BLOG_CATEGORIES => typeof data === 'string';