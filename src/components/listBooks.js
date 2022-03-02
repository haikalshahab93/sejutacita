import React from 'react';
import Book from './Book';

export const listBooks = ({ books, onClick, buttonLabel }) =>
  books.map((book) => (
    <Book book={book} onClick={onClick} buttonLabel={buttonLabel} />
  ));
