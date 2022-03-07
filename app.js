const express = require("express");
const app =express();
const mongoose = require("mongoose");
 const bookRoute = require("./route/book");
 const userRoute = require("./route/user");
          


 mongoose.connect(
     "mongodb+srv://raffiya:raf12345@cluster0.mivec.mongodb.net/Project 0?retryWrites=true&w=majority     ",
()=>{
console.log("Db connect successfully")
}
 );
 app.use("/book", bookRoute);
 app.use ("/user",userRoute);
  app.get("/",(req, res)=>{
      res.send(" back end App  Start");
  })

  app.listen(process.env.port || 5000 ,()=>{
      console.log ("server is listening on 5000 port")
  })
