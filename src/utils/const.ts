import type { BLOG_CATEGORIES, Depth } from './types';

export const MAX_POSTS = 5;

export const CATEGORY_MAP: Record<BLOG_CATEGORIES, string> = {
    "all": "All",
    "blog-post": "Blog Post",
    "impression": "Impression",
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

export const MY_REPOS = [
    {
        title: "react-design-pattern-with-medium-clap",
        link: "https://github.com/12cassie34/react-design-pattern-with-medium-clap",
        description: "The repository demonstrates how to implement eight common React design patterns, including custom hooks, compound components, controlled props, and more, by building Medium claps.",
        imgSrc: "https://i.imgur.com/pVIaVsM.png",
        tags: ["React", "TypeScript", "Material UI", "react-spring"],
    },
    {
        title: "tenzies-game",
        link: "https://github.com/12cassie34/tenzies-game",
        description: "In the app, once a new game start, an user can roll ten dices at a time and select the dices with a same value. The selected dices won't be changes when the user click the roll button again. When the ten dices have a same value, the user can win the game.",
        imgSrc: "https://camo.githubusercontent.com/c22406475a1a016aba6bfaa113a16d98402d015a0e757ebd4b82974ba8d00e26/68747470733a2f2f692e696d6775722e636f6d2f69694e703251622e706e67",
        tags: ["React", "nanoid", "react-confetti"],
    },
    {
        title: "rock-paper-scissors-master",
        link: "https://github.com/12cassie34/rock-paper-scissors-master",
        description: "Users can play the rock-paper-scissors game with the app, and their scores will be recorded.",
        imgSrc: "https://camo.githubusercontent.com/f17236ed2386f9581e0c8e237b1de8cc4e76b1a715611dcee224dd2b2b397c19/68747470733a2f2f692e696d6775722e636f6d2f6662694e796c782e706e67",
        tags: ["Vue", "Vuex", "tailwindcss"]
    },
    {
        title: "quizzical",
        link: "https://github.com/12cassie34/quizzical",
        description: "In the website, an user can play a quiz game with 5 random questions provided by Open Trivia.",
        imgSrc: "https://camo.githubusercontent.com/3af21867051a8ecb02f5158ccd2a0e310941a089b779908374bd97123dbeeba3/68747470733a2f2f692e696d6775722e636f6d2f4a7844304762652e706e67",
        tags: ["React", "tailwindcss"],
    }
]


