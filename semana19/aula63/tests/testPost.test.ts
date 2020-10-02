import dotenv from 'dotenv'
import { Post } from "../src/Data/Post"
import PostsDatabase from "../src/Data/PostsDatabase"
import { BaseDatabase } from "../src/Data/BaseDatabase"
dotenv.config()

const post = {
  id: "001",
  title: "Morre o Pantera Negra",
  content: "Pantera Negra morre ao lutar contra Thanos"
}

const newPost = new PostsDatabase()

test('Create new post', async () => {
  await newPost.createPost(post)

  const postFromDB = await newPost.getPostById(post.id)

  expect(postFromDB).not.toBe(undefined)
  expect(postFromDB).toEqual({
    id: "001",
    title: "Morre o Pantera Negra",
    content: "Pantera Negra morre ao lutar contra Thanos"
  })

})

test('testing duplicated keys', async () => {
  try {
    await newPost.createPost(post)
    await newPost.createPost(post)
  } catch (error) {
    expect(error).not.toBe(undefined)
  }
})

afterAll(async () => {
  await newPost.deletePostById(post.id);
  await BaseDatabase.destroyConnection();
});