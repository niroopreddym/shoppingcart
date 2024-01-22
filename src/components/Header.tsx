import React from "react";
import {
  Container,
  FormControl,
  Nav,
  Navbar,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => (
  <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
    <Container>
      <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
      </Navbar.Brand>
      <Navbar.Text className="search">
        <FormControl
          style={{ width: 500 }}
          placeholder="Search a product"
          className="m-auto"
        ></FormControl>
      </Navbar.Text>
      <Nav>
        <Dropdown align="end">
          <Dropdown.Toggle variant="success">
            <FaShoppingCart color="white" fontSize="25px" />
            <Badge>{10}</Badge> I
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ minWidth: 370 }}>
            <span style={{ padding: 10 }}>Cart is Empty!</span>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
