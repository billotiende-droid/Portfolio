import type {VercelRequest, VercelResponse } from '@vercel/node';


const nodemailer = require('nodemailer');

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if(req.method !== 'POST') {
        return res.status(405).json({error: 'Method not allowed'});
    }

    const {name, email, message}:{name:string; email:string; message:string} = req.body;

    const transporter = nodemailer.createTransport ({
        service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    });
    

}