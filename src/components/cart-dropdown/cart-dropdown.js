import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import CartItem from '../cart-item/cart-item'

import "./cart-dropdown.scss"

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown