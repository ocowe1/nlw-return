import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';
import { routes } from './routes';

const app = express();
app.use(express.json())
app.use(routes);




app.listen(3232, () => {
    console.log("server running");
})