// Express
import {
  Request,
  Response
} from 'express';
// Utils
import {
  logger,
  messages,
  statusCodes
} from '../../../utils';
// Modules
import { sendEmailModule } from '../modules';


/**
 * Handler description
 *
 * PATH: /api/...
 * AUTH-REQUIRED: false
 * ADMIN-REQUIRED: false
 *
 * @param { Object } req - The HTTP request object.
 * @param { Object } res - The HTTP response object.
 * @returns { void }
 */
const sendEmailController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
     const {
      ok,
      statusCode,
      message
    } = await sendEmailModule( req );

    res.status( statusCode ).json({
      ok,
      message
    });
  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'sendEmailController' );

    res.status( statusCodes.SERVER_ERROR ).json({
      ok: false,
      message: messages.SERVER_ERROR
    });
  }
}

export default sendEmailController;
