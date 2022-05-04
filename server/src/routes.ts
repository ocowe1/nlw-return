import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';
import { PrismaFeedbacksRepository } from './repositories/prisma/PrismaFeedbacksRepository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router();

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5b06c2684cc069",
      pass: "e4c0bd33911274"
    }
});

routes.post('/feedbacks', async (req,res) => {
    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository);

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })

    await transport.sendMail({
        from: 'Equipe <contato@ocowe.dev>',
        to: 'Vinicius Costa Santos <viniciusath@hotmail.com>',
        subject: 'Novo feedack',
        html: [
            `<div style="font-family:sans-serif; font-size:16px; color:#111;">`,
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
        ].join('\n')
    
    })

    return res.status(201).send();
});
