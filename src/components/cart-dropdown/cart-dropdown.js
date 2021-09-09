import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map( cartItem => <CartItem key={cartItem.id} item={CartItem}/>)
            }
        </div>
        <CustomButton isWhite>view bag</CustomButton>
    </div>
)


const mapStateToProps =  ({ cart: { cartItems}}) => ({
    cartItems: cartItems
})

export default connect(mapStateToProps)(CartDropdown)