import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from '../../components/checkout-item/checkout-item';

import "./checkout.styles.scss";

class CheckoutPage extends Component {
   render() {
      const { cartItems, total } = this.props
      return (
         <div className='checkout-page'>
            <div className='checkout-header'>
               <div className='header-block'>
                  <span>Product</span>
               </div>
               <div className='header-block'>
                  <span>Description</span>
               </div>
               <div className='header-block'>
                  <span>Quantity</span>
               </div>
               <div className='header-block'>
                  <span>Price</span>
               </div>
               <div className='header-block'>
                  <span>Remove</span>
               </div>
            </div>

            {
               cartItems.map( cartItem => (
                  <CheckoutItem key={cartItem.id} cartItems={cartItem} />
               ))
            }

            <div className='total'>
               <span>total:{total}</span>
            </div>

         </div>
      );
   }
}

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage)