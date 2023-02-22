import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
          <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce.jpg" alt="ecommerce"  className="home_image"/>
        

          <div className="home_row">
            <Product 
              id = "121"
              title = "Bennett™ Mystic Formal Business Briefcase Bag Crossbody Messenger College Bags For Men Women MacBook INoteBook ITablet Laptop Upto 15.6 Inch | Handbags with Shoulder Straps (Blue) 6 Months Warranty"
              price = {1000}
              rating = {5}
              image = "https://m.media-amazon.com/images/I/71Pk6o+INCL.jpg"
            />
            <Product 
              id = "122"
              title = "LG 21 L All In One Convection Microwave Oven (MC2146BL, Black)"
              price = {175}
              rating = {4}
              image = "https://m.media-amazon.com/images/I/71ITrl6RbQL._SX679_.jpg"           
            />
          </div>

          <div className="home_row">
            <Product 
              id = "123"
              title = "Black Framed Eyeglasses on Black Surface"
              price = {500}
              rating = {3}
              image = "https://images.pexels.com/photos/39716/pexels-photo-39716.jpeg?cs=srgb&dl=pexels-donald-tong-39716.jpg&fm=jpg"            
            />
            <Product 
              id = "123"
              title = "A Black Wireless Speaker"
              price = {2005}
              rating = {4}
              image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlfbvyvuZW3YfbgWQo8kPEluwQ99vHqLjUdB-6va-u6w&s"             
            />
            <Product 
              id = "123"
              title = "Silver Iphone X With Airpods"
              price = {30}
              rating = {3}
              image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKsHSzt5Yir5ef6QSbvs6MEWn4ggBnYhcNCET1hzxfXw&s" 
            />
          </div>

          <div className="home_row">
            <Product
              id = "123"
              title = "Half Moon 35 L Waterproof Laptop/College/School/Office Bag Backpack for Men Women Boys Girls with Rain Cover (Navy_Blue)"
              price = {10}
              rating = {5}
              image = "https://m.media-amazon.com/images/I/81oUvlsYcnL._UL1500_.jpg" 
            />
          </div>
      </div>
    </div>
  )
}

export default Home




