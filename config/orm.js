// Import mysql connection
var connection = require("../config/connection.js");

// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  

const orm ={

    selectAll: function(tableInput, cb){
        const queryString="SELECT * FROM ??" ;
        connection.query(queryString, [tableInput], function(err, result){
            if(err) throw err;
            cb(result);
        });

    },
    insertOne: function(tableInput, cols, values, cb){
        var queryString = "INSERT INTO " + tableInput;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";
    
        console.log(queryString);

        connection.query(queryString, values, function(err, result){
            if(err) throw err;

            cb(result);
        });

    },
    updateOne: function(){

    }
};


module.exports = orm;

