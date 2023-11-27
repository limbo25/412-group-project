import React from "react";

const Navbar = () => {
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="http://localhost:3000/">Late Night Pizza Shop</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="http://localhost:3000/menu">Menu <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link active" href="http://localhost:3000/checkout">Checkout <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="http://localhost:3000/aboutus">About Us</a>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar; 