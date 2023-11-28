import React from "react";

const Menu = () => {
    return(
        <>

            <h1 className="mb-5"> Pizza Menu </h1>

            <div className="container"> 
                <div className="row justify-content-around" > 
                    <div className="card mb-4 col-5" style={{height: 600, width: 600 }}>
                        <img className="card-img-top mt-2" src={require("../assets/img1.jpg")} alt="Card image cap" />
                        <div className="card-body">
                            <h1 className="card-title">Pizza one </h1>
                            <h5 className="card-text">Ingredients</h5>
                            <p className="card-text">Pizza, bread, tomateo, beans. </p>
                            <select class="form-control form-control-lg">
                                <option> 8" Pizza</option>
                                <option> 16" Pizza</option>
                                <option> 24" Pizza</option>
                            </select>
                            <a href="#" className="btn btn-primary d-flex justify-content-center mt-2" >Add to cart</a>
                        </div>
                    </div>
                    
                    <div className="card mb-4 col-5" style={{height: 600, width: 600 }}>
                        <img className="card-img-top mt-2" src={require("../assets/img1.jpg")} alt="Card image cap" />
                        <div className="card-body">
                            <h1 className="card-title">Pizza one </h1>
                            <h5 className="card-text">Ingredients</h5>
                            <p className="card-text">Pizza, bread, tomateo, beans. </p>
                            <select class="form-control form-control-lg">
                                <option> 8" Pizza</option>
                                <option> 16" Pizza</option>
                                <option> 24" Pizza</option>
                            </select>
                            <a href="#" className="btn btn-primary d-flex justify-content-center mt-2" >Add to cart</a>
                        </div>
                    </div>

                    <div className="card mb-4 col-5" style={{height: 600, width: 600 }}>
                        <img className="card-img-top mt-2" src={require("../assets/img1.jpg")} alt="Card image cap" />
                        <div className="card-body">
                            <h1 className="card-title">Pizza one </h1>
                            <h5 className="card-text">Ingredients</h5>
                            <p className="card-text">Pizza, bread, tomateo, beans. </p>
                            <select class="form-control form-control-lg">
                                <option> 8" Pizza</option>
                                <option> 16" Pizza</option>
                                <option> 24" Pizza</option>
                            </select>
                            <a href="#" className="btn btn-primary d-flex justify-content-center mt-2" >Add to cart</a>
                        </div>
                    </div>




                    
                
                </div>
            </div>

        </>
    );
}

export default Menu; 