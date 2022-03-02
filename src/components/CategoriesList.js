/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { BookContext } from "./BookContext";
import { listBooks } from "./listBooks";
import { Row, Container, Col } from "react-bootstrap";

const apibooks ="https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=1";
const proxy = "https://cors-anywhere.herokuapp.com/";
const url ="https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories";

const CategoriesList = () => {
  const { books, capture, addBooks } = useContext(BookContext);

  useEffect(() => {
    const dataCategories = async () => {
      const response = await fetch(`${proxy}${url}`);
      const data = await response.json();
      console.log(data);
    };

    const fetchBooks = async () => {
      const response = await fetch(`${proxy}${apibooks}`);
      const data = await response.json();
      console.log(data);
      addBooks(data);
    };

    dataCategories();
    fetchBooks();
  }, []);

  return (
    <div className="categories">
      <Container fluid={true} className="py-5">
        <Col className="text-center">
          <h2>Books List</h2>
        </Col>

        <Col>
          <Row className="text-center my-5" xs={1} md={4} xl={4}>
            {listBooks({
              books,
              onClick: capture,
              buttonLabel: "Bookmark",
            })}
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default CategoriesList;
