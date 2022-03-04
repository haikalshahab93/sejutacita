import React, { createContext } from 'react';
import { useBookReducer } from './useBookReducer';
import { CAPTURE, RELEASE, ADD_BOOK, ADD_BOOKS,SEARCH } from './actions';

const BookContext = createContext();

const BookProvider = (props) => {
  const [state, dispatch] = useBookReducer();
  const { books, capturedBooks,searchs,categories } = state;

  const capture = (book) => () => dispatch({ type: CAPTURE, book });
  const release = (book) => () => dispatch({ type: RELEASE, book });
  const addBook = (book) => dispatch({ type: ADD_BOOK, book });
  const addBooks = (books) => dispatch({ type: ADD_BOOKS, books });
  const search = (keyword) => dispatch({ type: SEARCH, keyword});
  
  const providerValue = {
    books,
    capturedBooks,
    searchs,
    capture,
    release,
    addBook,
    addBooks,
    search,
    
  };

  return (
    <BookContext.Provider value={providerValue}>
      {props.children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };
