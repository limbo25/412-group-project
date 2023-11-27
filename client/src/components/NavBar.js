import React from "react";


const Navbar = () => {
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div class="container" id="navbarNavAltMarkup">
                    <div class="navbar-nav ">
                        <a class="nav-item nav-link active col-sm" href="#">Menu <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link col-sm" href="#">About Us</a>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar; 
