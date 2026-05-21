import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnection from './database/dbConnection.js';
import {errorMiddleware} from './error/error.js';
import reservationRouter from './Routes/reservationRoute.js';

const app = express();
dotenv.config({ path: './config/config.env' });



app.use(
    cors({
           origin: [process.env.Frontend_URL, "http://localhost:5173"],
           methods: ["POST", "GET", "OPTIONS"],
           credentials: true,
})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservation', reservationRouter);


dbConnection();


app.use(errorMiddleware);
export default app;