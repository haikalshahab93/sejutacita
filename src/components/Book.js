import React from "react";
import { Card, Button, NavLink, Row } from "react-bootstrap";

const Book = ({ book, onClick, buttonLabel }) => (
  <tr key={book.id}>
    <Card className="mb-">
      <Card.Img className="d-inline-block align-top" src={book.cover_url} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          {/* {book.description.length> 5 ? `${book.description(0,5)}...`:book.description} */}
          {book.description.length > 20
            ? `${book.description.substring(0, 30)}`
            : `${book.description}`}
        </Card.Text>
        <Row>
          <NavLink key={book.id} to={book.id}>
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
