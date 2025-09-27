
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import dotenv from 'dotenv';
dotenv.config();

export const sendMailer = async (otp:number|string,email:string):Promise<void>=>{

    try {

        const transport = nodemailer.createTransport({
            host:process.env.SMHOST,
            port:Number(process.env.SMPORT),
            secure:true,
            auth:{
                user:process.env.SEND_MAIL,
                pass:process.env.MAIL_PASSWORD 
            }

        }as SMTPTransport.Options);

      const mailOptions = {
        from:process.env.SEND_MAIL,
        to:email,
        subject:`Opt for FoodHop-'Hopping flavors to your door'`,
        html:`<h2>Hi, This is your OTP from FoodHop</h2>
       <h3>Hopping flavors to your door</h3>
       <h1>${otp}</h1>`
      }

      const info = await transport.sendMail(mailOptions);

      console.log('Preview URL :',nodemailer.getTestMessageUrl(info));

    } catch (error) {
      if (error instanceof Error) {
            console.error('Error from sending Mail:', error.message);
        } else {
            console.error('Unknown error from sending Mail:', error);
        }
        throw new Error('Failed to send Mail');
    }
}