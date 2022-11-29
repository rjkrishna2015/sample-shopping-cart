import { connect } from "react-redux";
import CartCounter from "../../components/CartCounter";

const mapStateToProps = (state) => ({
  noOfCartItems: state.combinedReducerResult.length,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter);
