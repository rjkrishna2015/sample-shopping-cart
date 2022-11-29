import { connect } from "react-redux";
import ProductList from "../../components/ProductList";
import { addToCart } from "../services/actions/actions";

const mapStateToProps = (state) => ({
  data: state.combinedReducerResult,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (item) => dispatch(addToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
