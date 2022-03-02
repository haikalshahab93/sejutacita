import React, { useContext } from 'react';
import { BookContext } from './BookContext';
import { listBooks } from './listBooks';
import { Row, Container, Col } from "react-bootstrap";

const MyBookList = () => {
  const { capturedBooks, release } = useContext(BookContext);

  return (
    <div className="categories">
    <Container fluid={true} className="py-5">
      <Col className="text-center">
        <h2>Books List</h2>
      </Col>

      <Col>
        <Row className="text-center my-5" xs={1} md={4} xl={4}>
          {listBooks({
            books : capturedBooks ,
            onClick: release,
            buttonLabel: "Release Bookmark",
          })}
        </Row>
      </Col>
    </Container>
  </div>
  );
};

export default MyBookList;
