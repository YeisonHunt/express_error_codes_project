import { ErrorCode } from "./errors";

export class APIError extends Error {
    public readonly httpStatus: number;
    public readonly code: ErrorCode;
    public readonly timestamp: string;
    public readonly details?: Record<string, any>;
  
    constructor(
      message: string,
      code: ErrorCode,
      httpStatus: number = 500,
      details?: Record<string, any>
    ) {
      super(message);
      this.name = 'APIError';
      this.code = code;
      this.httpStatus = httpStatus;
      this.timestamp = new Date().toISOString();
      this.details = details;
  
      Object.setPrototypeOf(this, APIError.prototype);
    }
  
    public toJSON() {
      // Only return the error code to the client
      return {
        error: {
          code: this.code
        }
      };
    }
  }

export { ErrorCode };
