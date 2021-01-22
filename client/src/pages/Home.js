import React from "react";
import { Col, Row, Container } from "../components/Grid";
import BookSearchForm from "../components/BookSearchForm";
import BooksList from "../components/PostsList";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md">
          <BookSearchForm />
        </Col>
      </Row>
      <Col size="sm-12">
        <BooksList />
      </Col>
    </Container>
  );
};

export default Home;
