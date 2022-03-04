import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Book = ({ book, onClick, buttonLabel }) => 
(
  <tr key={book.id}>
    <Card className="mb-">
      <Card.Img className="d-inline-block align-top" src={book.cover_url} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>

          {book.description.length > 20
            ? `${book.description.substring(0, 30)}`
            : `${book.description}`}
        </Card.Text>
        <Row>
          <NavLink to={`../detail/${book.category_id}/${book.id}`}>
            <Button outline className="w-100" color="primary">
                View
            </Button>
          </NavLink>
          <Button outline className="w-100" color="primary" onClick={onClick(book)}>{buttonLabel} </Button>
        </Row>
      </Card.Body>
    </Card>
  </tr>
);

export default Book;
