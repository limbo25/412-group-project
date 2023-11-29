const express = require("express"); 
const app = express(); 
const cors = require("cors");
const pool = require("./db")

//middleware 
app.use(cors()); 
app.use(express.json());

//ROUTES//

let orderID = 1; 
let data = ''; 

app.get("/api/menu-items", async(req, res) => {
    try {
        const allData = await pool.query("SELECT * FROM items"); 
        data = allData; 
        res.json(allData.rows);
    } catch (error) {
        console.error(error);
    }
});

app.post("/api/makeorder", async(req, res) => {
    try {
        const  des = req.body; 
        console.log( des.address, des.phonenumber, des.arrivetime, des.arriveDate, des.total )
        // TODO
        const newGuestOfOrder = await pool.query(
            "INSERT INTO GuestOfOrder (address, phonenumber, arrivetime) VALUES ($1, $2, $3) RETURNING *",
            [des.address, des.phonenumber, des.arrivetime]
            );
        
        const newOrder = await pool.query(
            "INSERT INTO orders (orderid, totalamount, orderdate) VALUES ($1, $2, $3 ) RETURNING *", 
            [orderID, des.total, des.arriveDate ]
        ); 
    

        const newOrderComeFromGuest = await pool.query(
            "INSERT INTO orderscomefromguest (orderid, phonenumber, totalamount, orderdate) VALUES ($1, $2, $3, $4) RETURNING *", 
            [orderID, des.phonenumber, des.total, des.arriveDate ]
        ); 
        orderID += 1; 

        console.log("done!"); 
        // res.json(newDes.rows[0])

    } catch (error) {
        console.error(error);
    }
});


app.listen(5000, () => {
    console.log("server has started on port 5000"); 
}); 

