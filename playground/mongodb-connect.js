// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// //Object destructuring example below
// var user = {name:'Sharan'}
// var {name} = user;
// console.log(name);
//Split
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
    if(err){
        return console.log("Unable to connect to MongoDB server");
        
    }
    console.log("Connected to MongoDB server");
    //Split
    // db.collection('Todos').insertOne({
    //     completed:false,
    //     item:"Somthing"
    // },(err, result) => {
    //     if(err){
    //         return console.log("Unable to insert todo.");    
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
        
    // })
    //Split
    // db.collection('Users').insertOne({
    //     name:'Sharan',
    //     age:12,
    //     location:'Ellicott City'
    // },(err,result) => {
    //     if (err) {
    //         return console.log("Unable to insert data.");
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    //Split
    db.close();
});