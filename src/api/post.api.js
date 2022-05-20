const POSTS_URL = 'https://radiant-temple-07706.herokuapp.com/cards/';

 class PostApi {
    async getCards() {
        return await fetch(POSTS_URL, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user'))
            }
        }).then(data => data.json());
    }

    async postPost(post) {
        return await fetch(POSTS_URL, {
            body: JSON.stringify(post),
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')),
                'Content-Type': 'application/json'
            }
        }).then(postPost => postPost.json());
    }

    async putPost(post) {
        return await fetch(POSTS_URL + post.id, {
            body: JSON.stringify(post),
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')),
                'Content-Type': 'application/json'
            }
        }).then(putPost => putPost.json());
    }

    async deletePost(postId) {
        return await fetch(POSTS_URL + postId, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user'))
            }
        }).then(deletePost => deletePost.json());
    }
}

export default new PostApi();