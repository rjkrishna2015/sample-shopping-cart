import React from "react";

const ProductCartQnt = ({ setFunc, currItem }) => {
  const modifyCarQnt = (id, action) => {
    setFunc((products) =>
      products.map((item) => {
        if (item.id === id) {
          if (action === "minus" && item.cartItemQnt > 1) {
            return { ...item, cartItemQnt: item.cartItemQnt - 1 };
          } else if (action === "plus") {
            return { ...item, cartItemQnt: item.cartItemQnt + 1 };
          }
        }
        return item;
      })
    );
  };
  return (
    <div className="productcartqntwrapper">
      <i
        className="fa fa-minus"
        onClick={() => modifyCarQnt(currItem.id, "minus")}
      ></i>
      <span>{currItem.cartItemQnt}</span>
      <i
        className="fa fa-plus"
        onClick={() => modifyCarQnt(currItem.id, "plus")}
      ></i>
    </div>
  );
};

export default ProductCartQnt;
