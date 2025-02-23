declare const module: any;
import express from 'express';
import { rootHandler } from './api/root';

import userRoutes from './routes/user-routes';
import authRoutes from './routes/auth-routes';
import { errorHandler } from './middleware/error-handler';


async function bootstrap() {

  const app = express();
  app.use(express.json());

  // Routes
  app.use('/users', userRoutes);
  app.use('/auth', authRoutes);

  // Error handler middleware (must be last)
  app.use(errorHandler);

  app.get('/', rootHandler);
  const server = app.listen(4000, () => console.log('Listening on http://localhost:4000'));
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
  }
}
bootstrap();
