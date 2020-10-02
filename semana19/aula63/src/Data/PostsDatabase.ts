import { BaseDatabase } from "./BaseDatabase";
import { Post } from "./Post";

export default class PostsDatabase extends BaseDatabase {
    private static TABLE_NAME = "Posts_Labook"

    public async createPost(post: any): Promise<void> {
        try {
            await this.getConnection().insert({
                id: post.id,
                title: post.title,
                content: post.content
              }).into("Posts_Labook")
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    };

    public async getPostById(id: string): Promise<any> {
        try {
            const result = await this.getConnection().raw(`
                SELECT * FROM ${PostsDatabase.TABLE_NAME}
                WHERE id = "${id}"
            `)
            return result[0][0];
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    };

    public async deletePostById(id: string): Promise<void> {
        try {
            await this.getConnection().raw(`
                DELETE FROM ${PostsDatabase.TABLE_NAME}
                WHERE id = "${id}"
            `)
        } catch (error) {
            throw new Error('erro')
        }
    }
}