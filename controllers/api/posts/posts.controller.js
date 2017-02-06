class PostsController{
    constructor(router){
        router.get('/', this.getPosts.bind(this));
    }

    getPosts(req, res){
        res.send('getPosts');
    }
}

module.exports = PostsController;