---
slug: "learning-diary/learning-diary-pixijs-tutorial-notes"
layout: ../../layouts/Blog.astro
category: "learning-diary"
poster: "/images/pixijs-banner.png"
title: "PixiJS Tutorial Notes"
subtitle: "The beginning of my first PixiJS journey—note down in as much detail as possible what I have observed."
relatedPosts: []
pubDate: 170427549000000
---
# ``new`` an ``Application``
- The constructor is `new PIXI.Application`.
- We can pass some props like `background` and `resizeTo`.
    - If you set `resizeTo` as `window`, the `HTMLCanvasElement` `div` returned by the constructor will expand to the entire window.
- Finally, append `app.view` to `body`.

```js
import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
    background: 'gainsboro',
    resizeTo: window
});

document.body.appendChild(app.view);
```

# Create a Sprite
- Pixi renders a hierarchy of `DisplayObject`. A `sprite` is a kind of `DisplayObject`, it is responsible for wrapping a loaded image. 
    -  Images are loaded asynchronously in Pixi as well. Utilise: `PIXI.Sprite.from("yourImageURL")`
    - We can set the image's anchor. We can use `app.screen.width` and `app.screen.height` to anchor the image.
- A `stage` is where our animation alive, we can see it as a container. Utilise: `app.stage.addChild(yourLoadedImage)`

# Writing an Update Loop
- `ticker` is a PIXI object that can execute one or more callback functions each frame. Within these callback functions, we have the ability to move or rotate our sprites.
- We can simply call `app.ticker.add(...)`.

```js
app.ticker.add((delta) => {
    sprite.rotation += .1 * delta;
});
```