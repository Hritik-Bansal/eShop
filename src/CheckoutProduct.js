import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct(props) {

 const [{ basket }, dispatch ] = useStateValue();

 const removeFromBasket = () => {
  dispatch({
    type: "REMOVE_FROM_BASKET",
    id: props.id
  })
 } 

  return (
    <div className='checkoutproduct'>
        <img src={props.image} alt="" className="checkoutproduct_image" />

        <div className="checkoutproduct_info">

            <p className="checkoutproduct_title">
              {props.title} 
            </p>

            <p className="checkoutproduct_price">
                <small>$</small>
                <strong>{props.price}</strong>
            </p>

            <div className="checkoutproduct_rating">
              {Array(props.rating)
                      .fill()
                      .map((_, i) => (
                          <p>⭐</p>
                      ))}
            </div> 

            <button onClick={removeFromBasket}>Remove from Basket</button>

        </div>
      
    </div>
  )
}

export default CheckoutProduct
