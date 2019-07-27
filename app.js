import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { userRouter } from './router'

const app = express();

const handleHome = (req, res) => res.send('Hello from server')

const handleProfile = (req, res) => res.send('You are on my profile');

// Start Middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());    // for security
app.use(morgan("dev")); // for logging
// End Middleware

// Start Routes
app.get("/", handleHome);
app.get("/profile", handleProfile);
app.use("/user", userRouter);
// End Routes

export default app;