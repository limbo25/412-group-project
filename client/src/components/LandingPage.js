import React from "react";

const LandingPage = () => {
    return(
        <>
            <div className="bg-black">
                <h1 className=""> Welcome to our pizza paradise, where flavor meets convenience! 🍕🎉</h1>
            </div>
            <img src={require("../assets/img1.jpg")} className="img-fluid" alt="pizza image"/>

        </>
    );
}

export default LandingPage; 