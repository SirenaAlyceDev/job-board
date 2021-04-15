import React from "react";
import Footer from "./FooterComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  CardBody,
  CardTitle,
  CardText,
  Form,
} from "reactstrap";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function LandingPage() {
  return (
    <>
      <Container>
        <Row className="align-items-center mb-2 p-2">
          <Col className="p-2">
            <h1>Header/Title</h1>
            <h2>Subtitle</h2>
            <p>blurb</p>
            <Button variant="contained" href="/">
              CTA
            </Button>
          </Col>
          <Col>
            <p>image/video goes here</p>
          </Col>
        </Row>
        <Row className="mb-2 p-2">
          <CardDeck>
            <Card>
              <CardBody>
                <CardTitle>Feature #1</CardTitle>
                <CardText>
                  Apple pie sesame snaps pie. Candy jelly caramels lemon drops
                  topping gummies oat cake cotton candy. Cookie chocolate
                  cheesecake tiramisu cupcake apple pie cake lemon drops.
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>Feature #2</CardTitle>
                <CardText>
                  Croissant marzipan sugar plum cake sesame snaps gingerbread.
                  Apple pie marzipan macaroon pie bear claw. Cake tootsie roll
                  tiramisu bear claw sweet donut cupcake bear claw liquorice.
                  Chupa chups cheesecake chocolate chocolate bar cotton candy
                  cotton candy topping pastry donut.
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>Feature #3</CardTitle>
                <CardText>
                  Gummies sweet fruitcake bonbon marshmallow sweet roll cake
                  donut candy. Cake icing candy. Oat cake macaroon danish.
                  Gummies jujubes marshmallow.
                </CardText>
              </CardBody>
            </Card>
          </CardDeck>
        </Row>
        <Row className="align-items-center text-center mb-2 p-2">
          <Col>social proof 1</Col>
          <Col>social proof 1</Col>
          <Col>social proof 1</Col>
          <Col>social proof 1</Col>
        </Row>
        <Row className="align-items-center mb-2 p-2">
          <Col>
            <h2 className="text-center">How The App Works</h2>
          </Col>
        </Row>
        <Row className="align-items-center mb-2 p-2">
          <Col>
            <h2 className="text-center">Team</h2>
          </Col>
        </Row>
        <Row className="align-items-center p-2">
          <Col>
            <Form className="text-center">
              <TextField label="Email"></TextField>
              <Button classname="cta" variant="contained" href="/">
                CTA
              </Button>
            </Form>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default LandingPage;
