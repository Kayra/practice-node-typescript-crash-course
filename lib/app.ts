import * as express from "express";
import * as bodyParser from "body-parser";


class App {

  public app: express.Application;

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    
    const router = express.Router();

    router.get('/', (request: express.Request, response: express.Response) => {

      response.status(200).send({
        message: 'Hello world! You\'ve hit the index page.'
      })

    });

    router.post('/', (request: express.Request, response: express.Response) => {
      
      const data = request.body;

      response.status(200).send(data);

    });

    this.app.use('/', router);

  }

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

}

export default new App().app;