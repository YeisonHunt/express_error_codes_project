## Custom error handling backend with codes and error-wrapper


#### Example

```bash
curl http://localhost:4000/users/999
```

will get:
```bash
{
  timestamp: '2025-02-23T15:58:25.974Z',
  error: {
    name: 'APIError',
    message: 'User with ID 999 not found',
    stack: 'APIError: User with ID 999 not found\n' +
      '    at /home/yeison/projects/rspack-examples/rspack/express/dist/main.js:21899:19\n' +
      '    at Layer.handle [as handle_request] (/home/yeison/projects/rspack-examples/rspack/express/dist/main.js:8487:5)\n' +
      '    at next (/home/yeison/projects/rspack-examples/rspack/express/dist/main.js:8727:13)\n' +
      '    at Route.dispatch (/home/yeison/projects/rspack-examples/rspack/express/dist/main.js:8697:3)\n' +
      '    at Layer.handle [as handle_request] (/home/yeison/projects/rspack-examples/rspack/express/dist/main.js:8487:5)\n' +
      '    at /home/yeison/projects/rspack-examples/rspack/express/dist/main.js:7998:15\n' +
      '    at param (/home/yeison/projects/rspack-examples/rspack/express/dist/main.js:8079:14)\n' +
      '    at param (/home/yeison/projects/rspack-examples/rspack/express/dist/main.js:8090:14)\n' +
      '    at Function.process_params (/home/yeison/projects/rspack-examples/rspack/express/dist/main.js:8135:3)\n' +
      '    at next (/home/yeison/projects/rspack-examples/rspack/express/dist/main.js:7994:10)',
    code: 2001,
    details: { userId: 999 }
  },
  request: {
    method: 'GET',
    url: '/users/999',
    headers: {
      'user-agent': 'PostmanRuntime/7.43.0',
      accept: '*/*',
      'postman-token': 'c1c9e2de-bb87-4ce9-9c99-2bf64e096c50',
      host: 'localhost:4000',
      'accept-encoding': 'gzip, deflate, br',
      connection: 'keep-alive'
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


### TODO
- Enable source-maps on dev mode.