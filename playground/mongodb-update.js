const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5a666833b46c873da481b4d1")
    // }, {
    //     $set:{
    //         completed:true
    //     },
    // }, {
    //     returnOriginal:false
    // }).then((res) => {
    //     console.log(res);
        
    // }, (err) => {
    //     console.log("Error");
    //     console.log(err);
        
        
    // })
    //ObjectId("5a610a2cb90c7b30f47996d8")
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a610a2cb90c7b30f47996d8')
    },{
        $set:{
            name:'Jahnvi'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false 
    }).then((res) => {
        console.log(res);        
    },(err) => {
        console.log(err);
        
    })
    //findOneAndUpdate
    // db.collections
    // db.close();
});
