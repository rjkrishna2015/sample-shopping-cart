import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartCounterContainer from "../redux-store/containers/CartCounterContainer";
function HeaderBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark" className="navbarheadwrapper">
        <Container fluid>
          <Navbar.Brand href="/">Sample Shopping Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 navheight" navbarScroll>
              <Nav.Link href="https://github.com/rjkrishna2015" target="_blank">
                <i className="fa fa-github-square" />
                &nbsp;Github
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/ram-jee-krishna-4b81a1230"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" />
                &nbsp;Linkedin
              </Nav.Link>
            </Nav>
            <CartCounterContainer />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderBar;
