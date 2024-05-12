import { autoInjectable } from 'tsyringe';
import BookService from './service';
import { Hono } from 'hono';

@autoInjectable()
export default class BookController {
  bookService: BookService;
  router: Hono;

  constructor(bookService: BookService) {
    this.bookService = bookService;
    this.router = new Hono();
  }

  getBooksRoute() {
    return this.bookService.getBooks();
  }

  routes() {
    this.router.get('/', (context) => {
      return context.json(this.getBooksRoute());
    });
    return this.router;
  }
}
