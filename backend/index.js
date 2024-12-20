const express = require("express")
const jokes = require("./joke.json")
const fs = require("fs")

let app = express();

let port = 3000;

// Middleware to parse JSON data
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("hello there")
})

app.post("/api/data", (req, res) => {
  let body = req.body // Access the parsed request body
  fs.appendFile("formdata.json",JSON.stringify(body),(err,data)=>{
      res.send("data from frontend");
  })
}); 

app.get("/api/jokes",(req,res)=>{
    res.send(jokes)
})

app.listen(port,()=>{
    console.log("app is running");
})
