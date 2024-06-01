---
slug: "notes/what-is-a-cache"
layout: ../../layouts/Blog.astro
category: "notes"
poster: "https://cdn.pixabay.com/photo/2023/12/03/10/37/ai-generated-8427261_1280.jpg"
title: "Tech article notes: What is a cache?"
subtitle: "Jamie Turner from Convex wrote a great post about caching. Here are some takeaways."
relatedPosts: []
pubDate: 1717260657000
---
You can find his fabulous post here: [Caching In: Defining, Optimizing, and Invalidating Your Cache](https://stack.convex.dev/caching-in?ref=bytes&ck_subscriber_id=1946761386)

Here is his definition about cache:

> A cache is a non-authoritative representation of data maintained for performance.

Well... there are so many big words that I instantly felt dazzled.

Although he broke it down in the post, why not describe it in my own words?

A cache is a type of **representation** data that originates from a **single source of truth** and should be **maintained** to remain up-to-date. It can help enhance our **performance**.

Alright, I hope it's clearer now and provides us with more hints about what a cache is.

Let's dive deeper into what the original post is saying.

# Single source of truth(non-authoritative)
We store our data in the database, and the database is our **single source of truth**. In other words, data in the database is **authoritative**.

Oftentimes, we use a cache to lighten the burden on our database, which means that we may not get the most updated data as we don't want to request data from our server too frequently.

This fact means that a cache is a **temporary data**. It may represent data that exists or **had existed** exactly in our database.

We can't wholly trust a cache no matter how much we want!

# Representation
**What 'representation' means here is 'computed data'.** It helps reduce CPU time because caches remember computed data.

For instance, there are many collections in your database. To render a story and its related comments, the server side may query the post collection and the comment collection, then combine the data into a JSON object and pass it to the client side. The calculation may cost a lot, and if there is a cache, we won't compute the data every single time we receive a request."

# Performance
Performance is the first word that comes to mind when we think about caches.

There are two main reasons to boost performance:

- You store the cached data in **RAM**, which is much faster than disks.
- You shorten the **physical distance** and reduce the bandwidth usage between the data source and the client side.

Redis utilises the first strategy: it stores data in RAM. In this case, we don't care about the fact that the data will disappear when our computer restarts. Why? **Because cache is non-authoritative!** We can always retrieve the data from its single source of truth.

However, performance is usually boosted by the second reason. Our browser caches are stored on disks too. We don't know whether our disk is faster than any website's servers.

So why do browsers need to store caches on our disks? It's because it takes time and resources to connect to servers that reside in various corners of the world. What's worse is that you may not have the bandwidth to load the data quickly.

Your computer's SSD can read the cached data on disk in just a few milliseconds.

# Maintain
Okay, so now we know caches are a non-authoritative representation of data, which means that they are a set of **temporary** data. Therefore, we need to update them from the single source of truth. This process is called cache invalidation.

In most cases, caches should be updated as frequently as possible. There are two common strategies to do this:

## Polling
The simplest way is polling. With this method, we ask at specific intervals whether there are changes that we should update in the caches.

HTTP has `cache-control` headers to tell browsers how long to wait before checking if there is an update.

However, this is an inefficient way. To ensure our caches are up-to-date, we tend to set a very short interval, which may result in many needless requests.

## Pushing new values proactively
What about handling maintenance in another way?

When our single source of truth updates authoritative data, we push a notification to the caches to let them update their representation. In this way, we won't waste our resources on needless requests, and caches can be updated as soon as possible.

To do this, we need a more complicated protocol between the caches and the source of truth. It also requires a persistent communication channel.

# Cache invalidation
The most difficult aspect of managing a cache is invalidation. Since the cache is merely a representation of the underlying data, it can become outdated. However, several challenges need to be addressed during the invalidation process.

## Thundering herds
We need the cache because our apps need to handle high volumes of requests, and we want to increase the apps' performance regardless of the load.

However, when it comes to cache invalidation, things may revert to the same issue. **There could be a large number of requests for cache validation that your database can't handle.**

The common solution is to set up an agent to request updated data. The agent then provides the data it has to any incoming requests. A stale value could be sent out as the agent needs time to receive data from the single source of truth.

Therefore, we need to handle errors and timeouts appropriately and retry until the cache can be updated.

## Caching hierarchies
Software applications are so complicated nowadays that **there are many layers of caching beneath what you see**. For instance: browser caches, CDNs, database buffer pools, operating system page caches, storage hardware caches, memory caches, and CPU instruction caches.

We don't know how far each layer is from our single source of truth or what protocols and settings are in place between these layers of caches. Furthermore, we don't have full control over these layers.

## Cache consistency
We set up the cache, we invalidate the cache. And... we get bugs!

We forget to update the A value when the B value has changed, or vice versa! This is a day-to-day scenario. It seems that there are hundreds of possibilities (or excuses) why related data aren't changed at the same time when they should be consistent.

# What can we do about the cache?
We break down the definition of cache. As software developers, what can we do about the cache? Jamie Turner's post gave some suggestions:

1. **Don't use the cache until you really need it.**

Because the cache is so complicated, it often introduces more bugs and problems to be solved.
Try other ways to solve a performance problem; save the cache as the last strategy.

2. **Choose a powerful platform/authoritative layer.**

Choose an authoritative layer that provides a protocol to handle cache invalidation for any caches above it, so you can focus on other ways to solve performance problems.

3. **Think cache invalidation as data dependencies.**

Come up with a structure that expresses 'when the A value changes, the B, C, and D values are affected.'

---

And that's it! I hope you enjoy these takeaways.