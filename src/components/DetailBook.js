import React, { useContext, useEffect,useState } from "react";
import { BookContext } from "./BookContext";
import { Container, Col, Card, Row, Car } from "react-bootstrap";

const DetailBook = () => {
  const [detail,setDetail] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      const url = window.location.href;
      const url_split = url.split("/");
      const idc = url_split[4];
      const idb = url_split[5];
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${idc}&&id=${idb}`);
      const data = await response.json();
      setDetail(data);
    };
    fetchBook();
  });

  return (
    <Container fluid={true} className="py-5">
      <Container id="detail">
          
        <tr key={detail.id}>
          <Card className="mb-">
            <Card.Img
              className="d-inline-block align-top"
              src={detail.cover_url}
            />
            <Card.Body>
              <Card.Title>{detail.title}</Card.Title>
              <Card.Text>
                {detail.description.length > 20
                  ? `${detail.description.substring(0, 30)}`
                  : `${detail.description}`}
              </Card.Text>
            </Card.Body>
          </Card>
        </tr>
      </Container>
    </Container>
  );
};

export default DetailBook;
