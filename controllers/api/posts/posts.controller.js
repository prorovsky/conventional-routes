import util from 'util';

class PostsController{
    constructor(router){
        router.get('/', this.getPosts.bind(this));
    }

    getPosts(req, res){
        res.render('index.html');
        console.log('gePosts');
    }
}