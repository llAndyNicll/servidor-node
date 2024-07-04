// Express
import {
  Request,
  Response,
  NextFunction
} from 'express';
// Validator
import { validationResult } from 'express-validator';
// Utils
import { statusCodes } from '../utils';


export const validateFields = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult( req );

  if ( !errors.isEmpty() ) {
    return res.status( statusCodes.BAD_REQUEST ).json( errors );
  }

  next();
}
