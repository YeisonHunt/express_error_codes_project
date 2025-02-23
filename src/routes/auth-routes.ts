import { Router } from 'express';
import { APIError, ErrorCode } from '../types/api-error';

const router = Router();

// Route that might throw an INVALID_TOKEN error
router.post('/verify', (req, res, next) => {
  try {
    const { token } = req.body;

    if (!token) {
      throw new APIError(
        'No token provided',
        ErrorCode.INVALID_TOKEN,
        401,
        { providedFields: Object.keys(req.body) }
      );
    }

    if (token === 'expired') {
      throw new APIError(
        'Token has expired',
        ErrorCode.TOKEN_EXPIRED,
        401,
        { token }
      );
    }

    res.json({ message: 'Token valid' });
  } catch (error) {
    next(error);
  }
});

export default router;