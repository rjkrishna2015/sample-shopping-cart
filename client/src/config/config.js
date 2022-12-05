var API_PATH = "";
if (process.env.NODE_ENV === "production") {
  API_PATH = "https://sample-shopping-cart-backend.onrender.com/getallproducts";
} else {
  API_PATH = "http://localhost:8759/getallproducts";
}
export { API_PATH };
