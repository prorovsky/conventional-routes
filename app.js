import express from 'express';
import router from '';

const app = express(),
    port = 3000;

class Server {

    constructor() {
        this.initExpressMiddleWare();
        this.initRoutes();
        this.start();
    }

    start() {
        app.listen(port, (err) => {
            console.log(`Server started on port ${port}`);
        });
    }

    initExpressMiddleWare() {
        app.use(express.static(__dirname + '/public'));
    }

    initRoutes() {
        router.load(app, './controllers');

        app.all('/*', (req, res) => {
            res.send('Nothing there');
        });
    }
}

var server = new Server();

