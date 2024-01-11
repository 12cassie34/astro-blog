import type { BLOG_CATEGORIES, Depth } from './types';

export const MAX_POSTS = 5;

export const CATEGORY_MAP: Record<BLOG_CATEGORIES, string> = {
    "all": "All",
    "learning-diary": "Learning Diary"
}

const COMMON_CLASSES = "table-of-contents__index p-2 rounded-md";
export const TABLE_OF_CONTENTS_CLASSES: Record<Depth, string> = {
    "1": `${COMMON_CLASSES} ml-2`,
    "2": `${COMMON_CLASSES} ml-2`,
    "3": `${COMMON_CLASSES} ml-4`,
    "4": `${COMMON_CLASSES} ml-6`,
    "5": `${COMMON_CLASSES} ml-8`,
    "6": `${COMMON_CLASSES} ml-10`,
}