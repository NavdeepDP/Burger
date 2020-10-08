const express = require("express");

const burger =require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data){
        var newObject ={
            burgers: data
        };
        console.log(newObject)
        res.render("index", newObject);
    });
  
});

router.post("/api/burgers", function(res,res){

});

router.put("", function(res, res){

});





// Export router
module.exports = router;
