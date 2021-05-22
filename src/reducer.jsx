export const initialState = {
  basket: [],
  user: null,
};
//selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.produc_price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_TO_BASKET":
      const index = state.basket.findIndex(
        (basketitem) => basketitem.product_id === action.product_id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
export default reducer;
