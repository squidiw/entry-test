import CartActionTypes from "./cart.types";

export const selectAttribute = (attribute) => ({
   type:CartActionTypes.SELECT_ATTRIBUTE,
   payload: attribute
})

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const updateItem = (item) => ({
  type: CartActionTypes.UPDATE_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
