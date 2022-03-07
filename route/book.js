
const express = require("express");
const router = express.Router();
const bookModel= require("../model/bookmodel");

router.get("/",( req ,res)=>{
    bookModel.find((err,result)=>{
        if (!err){
            res.send(result).status(200);

        }
    })
});

router.post("/book", (req, res) => {
    let obj = {
        title: "The Book Of Sultan Salahuddin Ayubi",
        author: "Anonymous",
        price: 1000,
    };


    let newBook = new bookModel(obj);
    newBook.save((err, result) => {
        if (err) {
            res.send(err).status(404);
            return;
        } else {
            res.json(result).status(200);
        };
        
  });
});
  





router.post ("/",(req,res)=>{
    let body = req.params.body;

    let bookObj = new bookModel(body);
    bookObj.save((err,result)=>{
        if(!err){
            res.send(result).status(200);
        }
    });
});

module.exports= router