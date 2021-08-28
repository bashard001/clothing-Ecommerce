import React from 'react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CustomButton from '../custom-button/custom-button.component'

import CartItem from '../cart-item/cart-item'

import { selectCartItems } from "../../redux/cart/cart.selector";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.scss"

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
    <div className="dropShade" onClick={toggleCartHidden}>
        <div className="cart-dropdown" onClick={(e) => {
            e.stopPropagation()
        }}>
            <div className="cart-items">
                {
                    cartItems.length ?
                        (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                        : <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push("/checkout")
                toggleCartHidden();

            }}>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))