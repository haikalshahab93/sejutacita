import React, { createContext } from 'react';
import { useBookReducer } from './useBookReducer';
import { CAPTURE, RELEASE, ADD_BOOK, ADD_BOOKS } from './actions';

const BookContext = createContext();

const BookProvider = (props) => {
  const [state, dispatch] = useBookReducer();
  const { books, capturedBooks } = state;

  const capture = (book) => () => dispatch({ type: CAPTURE, book });
  const release = (book) => () => dispatch({ type: RELEASE, book });
  const addBook = (book) => dispatch({ type: ADD_BOOK, book });
  const addBooks = (books) => dispatch({ type: ADD_BOOKS, books });

  const providerValue = {
    books,
    capturedBooks,
    capture,
    release,
    addBook,
    addBooks,
  };

  return (
    <BookContext.Provider value={providerValue}>
      {props.children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };
