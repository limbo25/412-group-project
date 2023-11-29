import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(-1); 
    

  useEffect(()  =>  {
    // Retrieve data from local storage when the component mounts
    const storedResponse = localStorage.getItem("response");
    if (storedResponse) {
      const parsedResponse = JSON.parse(storedResponse);
      setCartItems(parsedResponse);
    }
  }, []);

  useEffect(() => {
    // Calculate the total when cartItems is updated
    const newTotal = cartItems.reduce((sum, item) => parseFloat(sum) + parseFloat(item.price), 0);
    setTotal(newTotal.toFixed(2));
  }, [cartItems]);


  const itemsList = cartItems.map((item, index) => (
    <li key={item} className="list-group-item  font-weight-bold justify-content-center">
        <h3> {item.itemName} </h3>
       {`Price: ${item.price}$`}
    </li>
  ));


  return (
    <>
        <h1 className="mx-5 mb-5 mt-2 display-1 font-weight-bold"> Your Cart </h1>
        <h1 className="mb-3 container d-flex justify-content-center align-items-center"> Total: {total}$</h1>
        <div className="mb-3 container d-flex justify-content-center align-items-center">
            <Link to="http://localhost:3000/menu">
                <button type="button" class="btn btn-primary btn-lg mr-2" style={{width:200}} href="http://localhost:3000/menu">Menu</button>
            </Link>
            <Link to="http://localhost:3000/checkout">
                <button type="button" class="btn btn-primary btn-lg mr-2" style={{width:200}} href="http://localhost:3000/checkout">Checkout</button>
            </Link>
        </div>
        <div className="container ">
            <ul className="list-group justify-content-center">{itemsList}</ul>
        </div>
    </>
  );
};

export default Cart;
