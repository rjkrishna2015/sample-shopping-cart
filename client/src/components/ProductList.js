import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import ProductPagination from "./ProductPagination";
import ProductCartQnt from "./ProductCartQnt";
import { addDefaultProductImgSrc } from "../helper/helper";
import { isMobile } from "react-device-detect";
import { API_PATH } from "../config/config";

export default function ItemList(props) {
  //Product and Pagination States
  const [products, setProducts] = useState([]);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [loading, setLoading] = useState(true);
  const [sortType, setSortType] = useState(true);
  const [sortFld, setSortFld] = useState("price");

  //Search State
  const [productSearchQuery, setProductSearchQuery] = useState("");

  useEffect(() => {
    fetchAllProducts();
    createDropDownListArr();
  }, []);

  const createDropDownListArr = () => {
    let myArr = [];
    for (var i = 6; i <= 20; i += 6) {
      myArr.push({ val: i });
    }
    return myArr;
  };

  const fetchAllProducts = async () => {
    let res = await fetch(API_PATH);
    let tmpArr = await res.json();

    // Adding cartQnt element for managing selected product quantity
    let data = [];
    tmpArr.records.forEach((item) => {
      data.push({ ...item, cartItemQnt: 1, cartItemAmt: 0 });
    });

    setProducts(data);
    setLoading(false);
  };

  const doSort = (fld) => {
    switch (fld) {
      case "priceLowToHigh":
        setSortFld("price");
        setSortType(true);
        break;
      case "priceHighToLow":
        setSortFld("price");
        setSortType(false);
        break;
      default:
        break;
    }
  };

  const sortProductList = (a, b) => {
    if (sortType === true) {
      if (typeof a[sortFld] === "number") {
        return a[sortFld] - b[sortFld];
      } else {
        return a[sortFld].toLowerCase() < b[sortFld].toLowerCase() ? -1 : 1;
      }
    } else {
      if (typeof a[sortFld] === "number") {
        return b[sortFld] - a[sortFld];
      } else {
        return a[sortFld].toLowerCase() > b[sortFld].toLowerCase() ? -1 : 1;
      }
    }
  };

  // PAGINATION LOGIC
  const recPerPage = 12;
  let totalNumPages = Math.ceil(products.length / recPerPage);
  let displayPageNumbers = [...Array(totalNumPages + 1).keys()].slice(1);
  let endPageIndex = currentPageNum * recPerPage;
  let startPageIndex = endPageIndex - recPerPage;

  let visibleProductList = [];
  if (productSearchQuery !== "") {
    endPageIndex = currentPageNum * recPerPage;
    startPageIndex = endPageIndex - recPerPage;
    visibleProductList = products
      .sort(sortProductList)
      .filter((item, key) => {
        return (
          item.title
            .toLowerCase()
            .trim()
            .indexOf(productSearchQuery.toLowerCase().trim()) !== -1 ||
          item.sku
            .toLowerCase()
            .trim()
            .indexOf(productSearchQuery.toLowerCase().trim()) !== -1
        );
      })
      .filter((item, key) => {
        return key >= startPageIndex && key <= endPageIndex;
      });
    totalNumPages = Math.ceil(visibleProductList.length / recPerPage);
    displayPageNumbers = [...Array(totalNumPages + 1).keys()].slice(1);
  } else {
    visibleProductList = products.sort(sortProductList).filter((item, key) => {
      return key >= startPageIndex && key < endPageIndex;
    });
  }

  return (
    <div>
      <Container fluid className="mt-2">
        <Alert
          variant="info"
          className={!isMobile ? "my-2 d-flex align-items-center" : ""}
        >
          <div className={!isMobile ? "wd-15" : ""}>
            <Form.Select
              onChange={(e) => doSort(e.target.value)}
              defaultValue="priceLowToHigh"
            >
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </Form.Select>
          </div>
          <div className={!isMobile ? "wd-60 text-center" : "my-2"}>
            <b>{products.length} Products Available</b>
          </div>
          <div className={!isMobile ? "wd-25" : ""}>
            <Form.Control
              type="text"
              placeholder="Search by Title or SKU"
              onChange={(e) => {
                setProductSearchQuery(e.target.value);
                setCurrentPageNum(1);
              }}
            />
          </div>
        </Alert>
        {!loading ? (
          <>
            <Row>
              {visibleProductList.map((item) => {
                return (
                  <Col xs={12} md={4} key={item.id}>
                    <Card className="mb-2">
                      <div className="centerflex">
                        <Card.Img
                          variant="top"
                          className="my-2 productlistcardimg"
                          src={item.image}
                          onError={addDefaultProductImgSrc}
                        />
                      </div>
                      <Card.Body>
                        <h6>{item.title}</h6>

                        <div className="productlistactionwrapper">
                          <h5 className="mr-3">
                            <Badge bg="primary">Price: ${item.price}</Badge>
                          </h5>

                          <ProductCartQnt
                            setFunc={setProducts}
                            currItem={item}
                          />
                          <Button
                            size="sm"
                            variant="primary"
                            onClick={() => {
                              props.addToCartHandler(item);
                            }}
                          >
                            <i className="fa fa-cart-plus" /> Add to Cart
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            <ProductPagination
              currentPageNum={currentPageNum}
              setCurrentPageNum={setCurrentPageNum}
              displayPageNumbers={displayPageNumbers}
              totalNumPages={totalNumPages}
            />
          </>
        ) : (
          <div className="text-center my-5">
            <i className="fa fa-spinner fa-spin fa-4x" />
          </div>
        )}
      </Container>
    </div>
  );
}
