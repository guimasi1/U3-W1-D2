import { Component } from "react";

import FantasyBooks from "../books/fantasy.json";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row className="g-2" xs={2} md={6} lg={8}>
          {FantasyBooks.map((book) => {
            return (
              <Col key={book.asin}>
                <Card className="h-100 d-flex justify-content-between ">
                  <div>
                    <Card.Img
                      style={{ height: "150px" }}
                      variant="top"
                      src={book.img}
                    />
                    <Card.Title className="fs-6">{book.title}</Card.Title>
                  </div>

                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      {book.category.charAt(0).toUpperCase() +
                        book.category.slice(1)}
                    </ListGroup.Item>
                    <ListGroup.Item>{book.price} $</ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;

// const capitalized =
//   word.charAt(0).toUpperCase()
//   + word.slice(1)
