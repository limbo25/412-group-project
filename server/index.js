const express = require("express"); 
const app = express(); 
const cors = require("cors");
const pool = require("./db")

//middleware 
app.use(cors()); 
app.use(express.json());

//ROUTES//

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

app.get("/api/", async(req, res) => {
    try {
        const allData = await pool.query("SELECT * FROM items"); 
        data = allData; 
        res.json(allData.rows);
    } catch (error) {
        console.error(error);
    }
});


app.listen(5000, () => {
    console.log("server has started on port 5000"); 
}); 

