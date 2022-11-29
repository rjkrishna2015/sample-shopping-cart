import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import CartDrawer from "./CartDrawer";
const CartCounter = (props) => {
  const [showCart, setShowCart] = useState(false);
  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);
  return (
    <>
      <div
        className="d-flex cartcounterwrapper"
        onClick={() => handleShowCart()}
      >
        <i className="fa fa-shopping-cart fa-2x text-white" />
        <Badge pill bg="danger" className="cartcounterbadge">
          {props.noOfCartItems}
        </Badge>
      </div>
      <CartDrawer showCart={showCart} handleCloseCart={handleCloseCart} />
    </>
  );
};

export default CartCounter;
