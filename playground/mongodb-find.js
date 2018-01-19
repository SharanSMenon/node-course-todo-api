const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    // db.collection('Todos').find({_id:new ObjectID('5a5d1d8858ca7180785995c2')}).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs,undefined,2));
    //   // return docs; for var <name>
    // },(err) => {
    //   return "Could not retrive query"
    // });
    //Split
    // db.collection('Todos').find().count().then((count) => {
    //   console.log(`Todos count: ${count}`);
    //   // return docs; for var <name>
    // },(err) => {
    //   return "Could not retrive query"
    // });
    //Split
    db.collection('Users').find({name:'Sharan'}).toArray().then((docs) => {
      console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
      return 'Unable to fetch data';
    });
    db.collection('Users').find({name:'Sharan'}).count().then((count) => {
      console.log(`Count of Sharan: ${count}`);
    },(err) => {
      return 'Unable to fetch data';
    });
    // console.log(array);
    db.close();
});
