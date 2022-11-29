import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";
export default function cartReducerFunc(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      let newState = state.find(
        (p) =>
          p.id === action.payload.id &&
          ((p.cartItemQnt = action.payload.cartItemQnt),
          (p.cartItemAmt = action.payload.price * action.payload.cartItemQnt),
          true)
      );
      if (newState !== undefined) {
        return state;
      } else {
        action.payload.cartItemAmt =
          action.payload.price * action.payload.cartItemQnt;
        return [...state, action.payload];
      }
    case REMOVE_FROM_CART:
      const filteredState = state.filter((item) => item.id !== action.payload);
      return filteredState;
    default:
      return state;
  }
}
