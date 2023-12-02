import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Menu = () => {
    const [pizzaChoice, setPizzaChoice] = useState([]);
    const [oldValues, setOldValues] = useState([]);
    const [cartItem, setCartItems] = useState([]);
    const navigate = useNavigate();



    const getData = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/menu-items");
            const jsonData = await res.json();             
            setPizzaChoice(jsonData);
            setOldValues(new Array(jsonData.length).fill(0));
        } catch (error) {
            console.log("error", error);
        }
    };
    
    const updatePrice = (itemName, newPrice, index) => {
        console.log(itemName, newPrice, oldValues)
        const updatedPizzaChoice = pizzaChoice.map((pizza) =>
          pizza.itemname === itemName ? { ...pizza, price: (parseFloat(pizza.price) + parseFloat(newPrice) - oldValues[index]).toFixed(2) } : pizza
        );
    
        setPizzaChoice(updatedPizzaChoice);
        setOldValues((prevValues) => {
          const newValues = [...prevValues];
          newValues[index] = parseFloat(newPrice);
          return newValues;
        });
      };

    const saveResponseToLocalStorage = () => {
        localStorage.setItem("response", JSON.stringify(cartItem));
        navigate('/cart')
      };
    

    const updateCart = (item, price) => {
        setCartItems([...cartItem, {itemName: item, price: price}]);
    };

    useEffect( () => {
        getData(); 
        console.log("Menu", pizzaChoice); 
    }, []); 



    const pizzacards = pizzaChoice.map((pizza, index) => (

        <div id={index} className="card mb-4 col-5" >
        <img className="card-img-top mt-2" src={require(`../assets/${pizza.itemname}.jpg`)} style={{height:270, width:430}} />
        <div className="card-body">
            <h1 className="card-title"> {pizza.itemname.replace(/-/g, " ")} </h1>
            <h5 className="card-text">Ingredients</h5>
            <p className="card-text"> {pizza.ingredients} </p>
            <select value={oldValues[index]} class="form-control form-control-lg" onChange={(e) => {updatePrice(pizza.itemname, e.target.value, index)}}> 
                <option value={0}> 8"  </option>
                <option value={4.99}> 16" + 4.99$</option>
                <option value={7.99}> 24" + 7.99$</option>
            </select>
            <h1 className="display-5 d-flex justify-content-center"> {`${pizza.price}$`} </h1>

            <a className="btn btn-primary d-flex justify-content-center mt-2" onClick={() => updateCart(pizza.itemname, pizza.price)}>Add to cart</a>
        </div>
    </div>
    ));

    return(
        <>
            < div className="row justify-content-around "> 
                <h1 className="mx-5 mb-5 mt-2 display-1 font-weight-bold d-flex"> Pizza Menu </h1>
                <a className="btn btn-primary d-flex justify-content-center mt-5"  onClick={() => saveResponseToLocalStorage()} style={{width:200, height:50}}>Go to cart</a>
            </div>
            <div className="container">
                <div className="container"> 
                    <div className="row justify-content-around" > 

                        {pizzacards}                        

                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu; 