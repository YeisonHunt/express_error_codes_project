export enum ErrorCode {
    // Auth Errors (1000-1999)
    INVALID_TOKEN = 1001,
    TOKEN_EXPIRED = 1002,
  
    // User Errors (2000-2999)
    USER_NOT_FOUND = 2001,
    INVALID_USER_INPUT = 2002,
  
    // Resource Errors (3000-3999)
    RESOURCE_NOT_FOUND = 3001,
    
    // Rate Limiting (4000-4999)
    TOO_MANY_REQUESTS = 4001,
  
    // Server Errors (5000-5999)
    INTERNAL_SERVER_ERROR = 5001,
  }