import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";
import { addDefaultProductImgSrc } from "../helper/helper";

export default function CartItemList(props) {
  const cartItems = props.data;
  if (cartItems.length > 0) {
    return (
      <div>
        <div className="cartitemlistwrapper">
          {cartItems.map((item) => (
            <Card className="mb-2" key={Math.random()}>
              <Container fluid>
                <Row>
                  <Col xs={2} md={2}>
                    <div>
                      <Card.Img
                        className="my-2 cartitemsimage"
                        src={item.image}
                        onError={addDefaultProductImgSrc}
                      />
                    </div>
                  </Col>
                  <Col xs={9} md={9}>
                    <div>{item.title}</div>
                    <div className="cartitemqntwrapper">
                      <h5 className="cartitemtext">
                        <Badge size="lg" bg="primary">
                          Qnt: {item.cartItemQnt}
                        </Badge>
                      </h5>
                      <h5 className="cartitemtext">
                        <Badge size="lg" bg="primary">
                          Amt: ${parseFloat(item.cartItemAmt).toFixed(2)}
                        </Badge>
                      </h5>
                    </div>
                  </Col>
                  <Col xs={1} md={1} className="centerflex">
                    <i
                      className="fa fa-trash cartitemremoveicon"
                      onClick={() => {
                        props.removeFromCartHandler({ id: item.id });
                      }}
                    />
                  </Col>
                </Row>
              </Container>
            </Card>
          ))}
        </div>
        <Alert className="mt-3" variant="primary">
          <b>
            Total: ${parseFloat(props.totalCartPrice).toFixed(2)} for{" "}
            {cartItems.length} items.
          </b>
        </Alert>
      </div>
    );
  } else {
    return (
      <Alert variant="primary">
        <b>No items in your cart. Close this to add more items in your cart.</b>
      </Alert>
    );
  }
}
