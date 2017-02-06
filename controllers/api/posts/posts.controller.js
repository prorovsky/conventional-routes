import util from 'util';

class PostsController{
    constructor(router){
        router.get('/posts', this.getPosts.bind(this));
    }

    getPosts(req, res){
        console.log('getPosts');
        res.send('index.html');
    }
}

module.exports = PostsController;