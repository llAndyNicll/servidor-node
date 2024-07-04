// Express
import { Request } from 'express';
// Services
import {
  prepareEmailOptionsService,
  sendEmailService,
  setUpEmailTemplateService
} from '../services';
// Utils
import {
  logger,
  statusCodes
} from '../../../utils';


const sendEmailModule = async ( req: Request ) => {
  // Desestructurate body data
  const {
    emailAddress,
    subject
  } = req.body;
  
  // Read local template and replace placeholders with real values
  const templateResult = await setUpEmailTemplateService( req );
   if ( !templateResult || !templateResult.template ) {
    return {
      ok: false,
      statusCode: statusCodes.BAD_REQUEST,
      message: 'Error setting up email template'
    };
  }

  const { template } = templateResult;

  const emailOptionsResult = await prepareEmailOptionsService(
    subject,
    template,
    emailAddress
  );
  if (!emailOptionsResult || !emailOptionsResult.mailOptions || !emailOptionsResult.transporter) {
    return {
      ok: false,
      statusCode: statusCodes.BAD_REQUEST,
      message: 'Error preparing email options'
    };
  }
  const { mailOptions, transporter } = emailOptionsResult;

  try {
    // Send email
    const {
      ok,
      statusCode,
      message
    } = await sendEmailService(
      transporter,
      mailOptions
    );

    return {
      ok,
      statusCode,
      message
    }
  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'sendEmailModule' );

    return {
      ok: false,
      statusCode: statusCodes.BAD_REQUEST,
      message: error
    }
  }
}

export default sendEmailModule;
