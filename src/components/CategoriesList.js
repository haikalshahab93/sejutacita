/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "./BookContext";
import { listBooks } from "./listBooks";
import { Row, Container, Col, InputGroup, FormControl } from "react-bootstrap";

const apibooks =
  "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=1";
const proxy = "https://cors-anywhere.herokuapp.com/";
const url =
  "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories";

const CategoriesList = () => {
  const { books, capture, addBooks, search } = useContext(BookContext);

  const handleChange = (e) => {
    if (e.target.value === "") {
      console.log("kosong");
    } else {
      search(e.target.value);
    }
  };

  useEffect(() => {
   
   
    const fetchBooks = async () => {
      const response = await fetch(`${proxy}${apibooks}`);
      const data = await response.json();
      // console.log(data);
      addBooks(data);
    };

    // dataCategories();
    fetchBooks();
  }, []);

  return (
    <div className="categories">
      <Container fluid={true} className="py-5">
        <Col className="text-center">
          <h2>Books List</h2>
        </Col>

        <InputGroup className="mb-3">
          <InputGroup.Text id="title">Title</InputGroup.Text>
          <FormControl
            placeholder="Title"
            aria-label="Title"
            aria-describedby="basic-addon1"
            onChange={handleChange}
          />
        </InputGroup>

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
