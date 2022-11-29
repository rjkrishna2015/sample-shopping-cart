import { connect } from "react-redux";
import CartItemList from "../../components/CartItemList";
import { removeFromCart } from "../services/actions/actions";

const mapStateToProps = (state) => ({
  data: state.combinedReducerResult,
  totalCartPrice: state.combinedReducerResult.reduce(
    (accumulatedTotal, cartItem) => {
      return accumulatedTotal + cartItem.cartItemAmt;
    },
    0
  ),
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCartHandler: (data) => dispatch(removeFromCart(data.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItemList);
