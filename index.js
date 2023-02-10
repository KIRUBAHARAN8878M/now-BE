require('dotenv').config();
const express = require('express');
const cors = require("cors");
const db = require('./db/connect')
const dataRoutes = require('./routes/data.route');


const app = express();
db();
app.use(express.json());
app.use(
    cors({
      origin: "*",
    })
  );


app.get('/',(req,res)=>{
    res.send("Welcome to My App ")
})

app.use(dataRoutes)

const PORT = process.env.PORT || 4000 ;

app.listen(PORT, ()=>{
    console.log(`App is running in PORT ${PORT}`)
})