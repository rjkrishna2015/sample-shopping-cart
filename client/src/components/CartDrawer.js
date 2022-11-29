import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItemListContainer from "../redux-store/containers/CartItemListContainer";
const CartDrawer = ({ showCart, handleCloseCart }) => {
  return (
    <div>
      <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart 🛒</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartItemListContainer />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CartDrawer;
