import React, { useContext } from 'react';
import { BookContext } from './BookContext';
import { listBooks } from './listBooks';

const DetailBook = () => {
  const { capturedBooks, release } = useContext(BookContext);

  return (
    <div className="pokedex">
      <h2>Pokedex</h2>

      <table>
        <tr>
          <th>Pokemon</th>
          <th>Release</th>
        </tr>
        {listBooks({
          books: capturedBooks,
          onClick: release,
          buttonLabel: '-',
        })}
      </table>
    </div>
  );
};

export default DetailBook;
