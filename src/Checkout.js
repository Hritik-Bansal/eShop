import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";

function Checkout() {
 
  const [{basket}, dispatch] = useStateValue();

  return (
    
      <div className="checkout">
        
        <div className="checkout_left">
           <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/onsite/Apr18/PeX_1500x200._CB1198675309_.jpg" alt="" className="checkout_ad" />
         
            <div>
              <h2 className="checkout_title">
                Your Shopping Basket
              </h2>

              {basket.map((item) => (
                <CheckoutProduct 
                   id= {item.id}
                   title= {item.title}
                   image = {item.image}
                   rating = {item.rating}
                   price = {item.price}               
                />
              ))
              } 
              
              
            </div>
             
        </div>

        <div className="checkout_right">

          <Subtotal />

        </div>

      </div>
    
  )
}

export default Checkout
