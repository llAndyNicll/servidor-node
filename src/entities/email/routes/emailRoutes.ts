// Express
import { Router } from 'express';
// Express Validator
import { check } from 'express-validator';
// Controllers
import { sendEmailController } from '../controllers';
// Middlewares
import { validateFields } from '../../../middlewares';


const router: Router = Router();

// SendEmail: api/email/contact
router.post(
  '/contact',
  [
    check( 'name', 'El nombre es necesario' ).not().isEmpty(),
    check( 'lastName', 'El apellido es necesario' ).not().isEmpty(),
    check( 'emailAddress', 'El correo electrónico es necesario' ).isEmail(),
    check( 'phone', 'El teléfono es necesario' ).not().isEmpty(),
    check( 'subject', 'El asunto es necesario' ).not().isEmpty(),
    check( 'message', 'El mensaje es necesario' ).not().isEmpty(),
    validateFields
    // TODO: Validate fields middleware
  ],
  sendEmailController
);



export default router;
