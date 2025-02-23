import { Router } from 'express';
import { APIError, ErrorCode } from '../types/api-error';

const router = Router();

// Simulate a database of users
const users = new Map([
  [1, { id: 1, name: 'John Doe', email: 'john@example.com' }],
  [2, { id: 2, name: 'Jane Smith', email: 'jane@example.com' }],
]);

// Route that might throw a USER_NOT_FOUND error
router.get('/:id', (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    const user = users.get(userId);

    if (!user) {
      throw new APIError(
        `User with ID ${userId} not found`,
        ErrorCode.USER_NOT_FOUND,
        404,
        { userId }
      );
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
});

// Route that might throw an INVALID_USER_INPUT error
router.post('/', (req, res, next) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      throw new APIError(
        'Name and email are required',
        ErrorCode.INVALID_USER_INPUT,
        400,
        { providedFields: Object.keys(req.body) }
      );
    }

    // Simulate success
    res.status(201).json({ id: 3, name, email });
  } catch (error) {
    next(error);
  }
});

export default router;