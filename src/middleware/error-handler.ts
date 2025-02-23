import { Request, Response, NextFunction } from 'express';
import { APIError } from '../types/api-error';
import { ErrorCode } from '../types/errors';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Log detailed error information to console
  console.error({
    timestamp: new Date().toISOString(),
    error: {
      name: error.name,
      message: error.message,
      stack: error.stack,
      ...(error instanceof APIError && {
        code: error.code,
        details: error.details,
      }),
    },
    request: {
      method: req.method,
      url: req.url,
      headers: req.headers,
      body: req.body,
    },
  });

  if (error instanceof APIError) {
    return res.status(error.httpStatus).json(error.toJSON());
  }

  // Handle unexpected errors
  const serverError = new APIError(
    'An unexpected error occurred',
    ErrorCode.INTERNAL_SERVER_ERROR,
    500
  );

  return res.status(500).json(serverError.toJSON());
};