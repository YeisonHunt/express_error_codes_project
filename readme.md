## Custom error handling backend with codes and error-wrapper


#### Example

```bash
curl http://localhost:4000/users/999
```

will get:
```bash
{
  timestamp: '2025-02-23T16:26:03.554Z',
  error: {
    name: 'APIError',
    message: 'User with ID 999 not found',
    stack: 'APIError: User with ID 999 not found\n' +
      '    at eval (webpack-internal:///./src/routes/user-routes.ts:37:19)\n' +
      '    at Layer.handle [as handle_request] (webpack-internal:///./node_modules/express/lib/router/layer.js:95:5)\n' +
      '    at next (webpack-internal:///./node_modules/express/lib/router/route.js:149:13)\n' +
      '    at Route.dispatch (webpack-internal:///./node_modules/express/lib/router/route.js:119:3)\n' +
      '    at Layer.handle [as handle_request] (webpack-internal:///./node_modules/express/lib/router/layer.js:95:5)\n' +
      '    at eval (webpack-internal:///./node_modules/express/lib/router/index.js:284:15)\n' +
      '    at param (webpack-internal:///./node_modules/express/lib/router/index.js:365:14)\n' +
      '    at param (webpack-internal:///./node_modules/express/lib/router/index.js:376:14)\n' +
      '    at Function.process_params (webpack-internal:///./node_modules/express/lib/router/index.js:421:3)\n' +
      '    at next (webpack-internal:///./node_modules/express/lib/router/index.js:280:10)',
    code: 2001,
    details: { userId: 999 }
  },
  request: {
    method: 'GET',
    url: '/users/999',
    headers: {
      host: 'localhost:4000',
      'user-agent': 'curl/7.81.0',
      accept: '*/*'
    },
    body: {}
  }
}
```

### How to run

```bash
npm run dev
```

If u want to see source maps, but it should be compiled first as follows:

```bash
npm run build && npm run dev-source
```

This command will tell you exactly the file that originated the error
BUT to the client it will only return the code

If no error is mapped, it will return the error. 

### Features

- Ultra fast compile and hot reload times with RS-Pack


