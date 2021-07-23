import React from 'react';
import { connect } from "react-redux"

import { clearItemFormCart } from '../../redux/cart/cart.actions';
import "./checkout-item.styles.scss"



const CheckoutItem = ({cartItem, clearItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10007;</div>
    </div>

)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFormCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)

