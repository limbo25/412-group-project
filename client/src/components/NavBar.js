import React from "react";

const Navbar = () => {
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <a class="navbar-brand text-danger" href="http://localhost:3000/">Late Night Pizza Shop</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active text-white" href="http://localhost:3000/menu">Menu <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link active text-white" href="http://localhost:3000/checkout">Checkout <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link text-white" href="http://localhost:3000/aboutus">About Us</a>
                        <a class="navbar-brand" href="http://localhost:3000/cart">
                            <img src={require("../assets/cart.png")} width="30" height="30" alt="" />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar; 