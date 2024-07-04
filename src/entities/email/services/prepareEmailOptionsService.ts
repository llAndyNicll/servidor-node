// Nodemailer
import nodemailer from 'nodemailer';
// Utils
import { logger } from '../../../utils';


const prepateEmailOptionsService = async (
  subject: string,
  template: string,
  emailAddress: string
) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number( process.env.EMAIL_PORT ),
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    let mailOptions = {
      from: emailAddress,
      to: process.env.EMAIL_USERNAME,
      subject: `Asunto: ${ subject }`,
      html: template
    }

    return {
      mailOptions,
      transporter
    }
  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'prepateEmailOptionsService' );
  }
}

export default prepateEmailOptionsService;
