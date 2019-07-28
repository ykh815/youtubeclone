import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import routes from "./routes";

const app = express();

app.set('view engine', "pug");
// Start Middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());    // for security
app.use(morgan("dev")); // for logging
// End Middleware

// Start Routes
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
// End Routes

export default app;