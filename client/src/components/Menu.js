import React, { useEffect, useState } from "react";

const Menu = () => {
    const [pizzaChoice, setPizzaChoice] = useState([]);

    const getData = async () => {
        try {
            const res = await fetch("http://localhost:5000/api");
            const jsonData = await res.json(); 
            // const tempArr = jsonData.map(item => `${item.itemname}`)
            
            setPizzaChoice(jsonData);
            
        } catch (error) {
            console.log("error", error);
        }
    };
    
    useEffect( () => {
        getData(); 
        console.log("Menu", pizzaChoice); 
    }, []); 

    const pizzacards = pizzaChoice.map(pizza => (

        <div className="card mb-4 col-5" >
        <img className="card-img-top mt-2" src={require(`../assets/${pizza.itemname}.jpg`)} style={{height:270, width:430}} alt="Card image cap" />
        <div className="card-body">
            <h1 className="card-title"> {pizza.itemname.replace(/-/g, " ")} </h1>
            <h5 className="card-text">Ingredients</h5>
            <p className="card-text"> {pizza.ingredients} </p>
            <select class="form-control form-control-lg">
                <option> 8" Pizza</option>
                <option> 16" Pizza</option>
                <option> 24" Pizza</option>
            </select>
            <a href="#" className="btn btn-primary d-flex justify-content-center mt-2" >Add to cart</a>
        </div>
    </div>
    ));

    return(
        <>
                <h1 className="mx-5 mb-5 mt-2 display-1 font-weight-bold"> Pizza Menu </h1>
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