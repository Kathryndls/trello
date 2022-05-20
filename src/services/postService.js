import GetDashboard from "../api/dashboard.api";
import PostApi from "../api/post.api";

class PostService {
    async getPosts(setStateFunc) {
        try {
            const newPosts = await PostApi.getCards().then(result => result);
            setStateFunc(newPosts);
        } catch (e) {
            console.log(`Error with ${e}`);
        }
    }

    async removePost(postId, setStateFunc) {
        try {
            setStateFunc(prev => prev.filter(post => post.id !== postId));
            await PostApi.deletePost(postId).then(result => result);
        } catch(e) {
            console.error(`Error with ${e}`);
        }
    }

    async postPost(setStateFunc) {
        try {
            await PostApi.postPost().then(result => result);
            setStateFunc(setStateFunc);
        } catch(e) {
            console.error(`Error with ${e}`);
        }
    }

    async putPost(post) {
        try {
            await PostApi.putPost(post).then(result => result);
        } catch(e) {
            console.error(`Error with ${e}`);
        }
    }
}

export default new PostService();