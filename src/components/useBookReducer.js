import { useReducer } from 'react';
import { CAPTURE, RELEASE, ADD_BOOK, ADD_BOOKS,ADD_CATEGORIES,SEARCH } from './actions';

const getCapturedBooks = (capturedBooks, releasedBook) =>
  capturedBooks.filter((book) => book !== releasedBook);

  

const releaseBook = (releasedBook, state) => ({
  books: [...state.books, releasedBook],
  capturedBooks: getCapturedBooks(
    state.capturedBooks,
    releasedBook
  ),
});

const searchBook = (keyword, state) => ({
  books : getSearch(state.books,keyword),
}
);

const getSearch = (keyword , books) =>keyword.filter((x)=> keyword.toLowerCase() == books.title.toLowerCase())

const getBooksList = (books, capturedBook) =>
  books.filter((book) => book !== capturedBook);

const captureBook = (book, state) => ({
  books: getBooksList(state.books, book),
  capturedBooks: [...state.capturedBooks, book],
});

const addBook = (book, state) => ({
  books: [...state.books, book],
  capturedBooks: state.capturedBooks,
});

const addBooks = (books, state) => ({
  books: books,
  capturedBooks: state.capturedBooks,
});

const addCategories = (categories, state) => ({
  categories: categories,
});



const bookReducer = (state, action) => {
  switch (action.type) {  
    case CAPTURE:
      return captureBook(action.book, state);
    case RELEASE:
      return releaseBook(action.book, state);
    case ADD_BOOK:
      return addBook(action.book, state);
    case ADD_BOOKS:
      return addBooks(action.books, state);
    // case ADD_CATEGORIES:
    //   return addCategories(action.categories, state);
    case SEARCH:
        return searchBook(action.keyword, state);
    default:
      return state;
  }
};

export const useBookReducer = () =>
  useReducer(bookReducer, {
    books: [],
    capturedBooks: [],
  });
