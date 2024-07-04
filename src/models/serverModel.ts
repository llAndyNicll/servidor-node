// Epress
import  express, { Application } from 'express';
// Cors
import cors from 'cors';
// Interfaces
import { ApiPaths } from '../interfaces';
// Routes
import { emailRoutes } from '../entities/routes';
// Utils
import { logger } from '../utils';


class Server {
  public app: Application;
  public port: string;
  public apiPaths: ApiPaths;
 
  constructor() {
    this.app = express();
    this.port = process.env.PORT ||  '3005';
    this.apiPaths = {
      email: '/api/email'
    };

    // Init middlewares
    this.middlewares();
    // Init Routes
    this.routes();
  }

  middlewares() {
    this.app.use( cors() );
    this.app.use( express.json() );
    this.app.use( express.static( 'public' ) );
  }

  routes() {
    this.app.use( this.apiPaths.email, emailRoutes );
  }

  listen() {
    this.app.listen( this.port, () => {
      logger.listenServerLogger( this.port );
    });
  }
}

export default Server;
