import React, { useEffect } from "react";

const Checkout = () => {

    useEffect(() => {
        // Retrieve data from local storage when the component mounts
        const storedResponse = localStorage.getItem("response");
        if (storedResponse) {
          JSON.parse(storedResponse);
        }
        console.log(storedResponse)
      }, []);
    

    return(
        <>
            <h1>  </h1>
        </>
    );
}

export default Checkout; 