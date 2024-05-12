import 'reflect-metadata';
import { Hono } from 'hono';
import { container } from 'tsyringe';

import BookController from './books/controller';

import { serve } from '@hono/node-server';

const app = new Hono();

app.route('/books', container.resolve(BookController).routes());

app.get('/', (context) => {
  return context.json({});
});

export default app;

// serve(
//   {
//     fetch: app.fetch,
//     port: 8787,
//   },
//   (info) => {
//     console.log(`Listening on http://localhost:${info.port}`); // Listening on http://localhost:3000
//   }
// );
