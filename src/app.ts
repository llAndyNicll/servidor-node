// DotEnv
import dotenv from 'dotenv';
dotenv.config();
// Server
import { Server } from './models';


const server = new Server();
server.listen();
