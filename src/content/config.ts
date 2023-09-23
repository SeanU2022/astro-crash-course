// 1. Import utilities from ‘astro:content'
// here z stands for ZOD 
import { defineCollection, z } from "astro:content"
// import {format} from "date-fns"

// const authorsCollection = defineCollection({
//     schema: ({image}) =>
//         z.object({
//             name: z.string(),
//             image: image(),
//         }),
// })

// 2. Define your collection(s)
const postsCollection = defineCollection({
    schema: z.object({
        author: z.string(),
        date: z.string(),
        image: z.string(),
        title: z.string(),
    }),
});
    
// const postsCollection = defineCollection({
//     schema: ({image}) =>
//         z.object({
//             author: z.string(),
//             categories: z.array(z.string()),
//             date: z
//                 .string()
//                 .transform(str => format(new Date(str), "MMMM d, yyyy")),
//             featured: z.boolean().default(false),
//             image: image(),
//             title: z.string(),
//         }),
// })

export const collections = {
    // authors: authorsCollection,
    posts: postsCollection,
};