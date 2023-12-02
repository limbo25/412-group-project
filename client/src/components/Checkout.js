import React, { useEffect, useState } from "react";

const Checkout = () => {
    const [total, setTotal] = useState(-1);
    const [cartItems, setCartItems] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date);
    const [userData, setUserData] = useState([{}]);
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState(""); 
    const [pizzas, setPizzas] = useState([]);


    const changeAddress = (e) => {
        setAddress(e.target.value)
        const newPIzzalist = cartItems.map((pizza, index) => pizza.itemName);
        setPizzas(newPIzzalist);
        setUserData(prevUserData => ({
            phonenumber: phone,
            address: address,
            arrivetime: currentTime.toLocaleTimeString('en-US', { hour12: false }),
            arriveDate: currentTime.toISOString().split('T')[0],
            total: total, 
            pizzas: pizzas
        }));

    }

    const changePhone = (e) => {
        setPhone(e.target.value)
        const newPIzzalist = cartItems.map((pizza, index) => pizza.itemName);
        setPizzas(newPIzzalist);
        setUserData(prevUserData => ({
            phonenumber: phone,
            address: address,
            arrivetime: currentTime.toLocaleTimeString('en-US', { hour12: false }),
            arriveDate: currentTime.toISOString().split('T')[0],
            total: total, 
            pizzas: pizzas
        }));

    }


    useEffect(()  =>  {
        // Retrieve data from local storage when the component mounts
        const storedResponse = localStorage.getItem("response");
        if (storedResponse) {
            const parsedResponse = JSON.parse(storedResponse);
            setCartItems(parsedResponse);
            const newPIzzalist = cartItems.map((pizza, index) => pizza.itemName);
            setPizzas(newPIzzalist);
        }
      }, []);
        
    useEffect(() => {
      // Calculate the total when cartItems is updated
      const newTotal = cartItems.reduce((sum, item) => parseFloat(sum) + parseFloat(item.price), 0);
      setTotal(newTotal.toFixed(2));
    }, [cartItems]);
    
    const generateTime = () => {
        const currentDate = new Date();
        const newDate = new Date(currentDate.getTime() + 2 * 30 * 60 * 1000);
        setCurrentTime(newDate);
        console.log(currentTime)
    };

    const makeOrder = async (e) => {
        
        e.preventDefault(); 

        setUserData(prevUserData => ({
            phonenumber: phone,
            address: address,
            arrivetime: currentTime.toLocaleTimeString('en-US', { hour12: false }),
            arriveDate: currentTime.toISOString().split('T')[0],
            total: total, 
            pizzas: pizzas
        }));

        try {
            const body = userData;
            const res = await fetch("http://localhost:5000/api/makeorder", {
                method: "POST", 
                headers: { "Content-Type": "application/json" }, 
                body: JSON.stringify(userData)
            });
            console.log(res.json()); 
        } catch (error) {
            console.log(error);
        }
      }

    return(
        <>
            <h1 className="mx-5 mb-5 mt-2 display-2 font-weight-bold"> Checkout </h1>
            <div className="mb-3 container d-flex justify-content-around align-items-center">            
                <div>
                    <h1 className="">
                        Order Total: {total}$
                    </h1>
                    <p className="mx-2 ">
                        Arrival time: {currentTime.toLocaleString()}
                    </p>
                </div>

                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="formGroupExampleInput">Phone Number</label>
                        <input type="formGroupExampleInput" class="form-control" id="formGroupExampleInput" placeholder="Phone number ex:13073857130" onChange={(e) => {changePhone(e)}} />
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputAddress">Address</label>
                        <input type="inputAddress" class="form-control" id="inputAddress" placeholder="ex:4557 Tea Berry Lane, Wakefield, Rhode Island, 02879" onChange={(e) => {changeAddress(e)}}/>
                        </div>
                    </div>
                    <div class="form-group">
                    </div>
                    <button onClick={(e) => {
                        makeOrder(e); 
                    }} 
                    type="submit" className="btn btn-primary btn-lg btn-block">Order</button> 
                </form>
            </div>
        </>
    );
}

export default Checkout; 