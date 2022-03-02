import React from 'react'
import { Container, Col,Row,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => (
    <Container fluid={true} className="py-5">
                <Container>
                    <Row>
                        <Col xs={{size: 1, offset: 1}} sm={{ size: 3, offset: 3 }} md={{ size: 4, offset: 4 }} lg={{ size: 4, offset: 4 }}>
                            <img draggable="true" src="/sejutacita2.png" width="300px" w className="w-900" alt={"Logo Blank "} />
                        </Col>
                    </Row>

                    
                   <Row className="my-5 text-center">
                        <Col className= "font-weight-bold">
                            <div className="">           
                                <h1 className="display-5 text-dark">Welcome to Sejuta Cita +</h1>
                                <h2 className="lead text-dark">
                                    Project Assignment<br />
                                    <b> Software Engineering Roles - Sejuta Cita +</b>
                                </h2>
                            </div>
                        </Col>
                    </Row>


                    <Row className="my-5 justify-content-center">
                        
                        <Col>
                            <Link to="/mybookmark">
                                <Button variant="primary" className="w-100">Bookmarks</Button>
                            </Link>
                        </Col>
                        
                    </Row> 
                </Container>
            </Container>
  )

export default Home