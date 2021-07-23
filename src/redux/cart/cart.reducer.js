import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.util";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};


const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN: return {
            ...state,
            hidden: !state.hidden
        }

        case CartActionTypes.CLEAR_ITEM_FORM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id )
            }

        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        default: return state

    }
}

export default cartReducer;