import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { localsMiddleware } from './middlewares';
import routes from "./routes";
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';

const app = express();

// Start Middleware
app.use(helmet());    // for security
app.set('view engine', "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); // for logging

app.use(localsMiddleware)   // moddleware for use local variable as global variable
// End Middleware

// Start Routes
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
// End Routes

export default app;