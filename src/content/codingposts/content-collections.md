---
title: Content Collections
url: https://docs.astro.build/en/guides/content-collections/
---
## Content Collections
A content collection is any top-level directory inside the reserved src/content project directory, such as src/content/newsletter and src/content/authors. Only content collections are allowed inside the src/content directory. This directory cannot be used for anything else.
		
To get the most out of your content collections, create a src/content/config.ts file in your project

## A:- here z stands for ZOD
look at content/config.ts: ie the code: 
  
  import { z, defineCollection } from astro:content
  
  Defining datatypes with Zod- Astro uses Zod to power its content schemas.
See https://github.com/colinhacks/zod Zods' README for complete documentation on how Zod works and what features are available.

## B:- coding:- IMPORTANT! - the KEY should match folder where content lives
    in this example: "src/content/xy67posts" the directory KEY (xy67posts) must be matched exactly in the config.ts source code here:-

	export const collections = { xy67posts: postsCollection };


## C:- Schema definition in config.ts expects the md files to have the same keys:-

##### // 1. in config.ts Define your collection(s)
const postsCollection = defineCollection({
    schema: z.object({
        author: z.string(),
        date: z.string(),
        image: z.string(),
        title: z.string(),
    }),
});

##### // 2. in md file: 
author: dwight-schrute
date: 08/10/2021
image: ./images/gear.jpg
title: Gear is insanely expensive

##### // 3. if md file has more keys than config.ts things still work: 
author: dwight-schrute
categories: ["career advice"]
date: 08/10/2021
featured: false
image: ./images/gear.jpg
title: Gear is insanely expensive


## D:- blog.astro get the blogs
##### // 1. add js code between the --- (note: await is here because reading blogs is aasync hence only a promise)
import { getCollection } from 'astro:content';

const posts = await getCollection("posts");
console.log(posts)

## E:- create PostList.astro
##### // The prop of posts in PostList.astro must match the type 
type Props = {
    posts: CollectionEntry<"posts">[]
}
##### // must match the type defined in config.ts
const postsCollection = defineCollection({
    schema: z.object({
...
    }),
});
##### // exported as posts from config.ts
export const collections = {
    posts: postsCollection,
};

## F:- create Post.astro
##### // 


## G:- use PostList  with passed in posts in blog.astro 
##### // <PostList posts={posts}

test