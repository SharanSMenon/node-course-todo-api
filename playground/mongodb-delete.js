const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    //Delete Many
    // db.collection('Todos').deleteMany({item:'Teaching Textbooks'}).then((res) => {
    //   console.log(res);
    // }, (err) => {
    //   console.log(`Error: ${err}`);
    // });
    //Delete One
    // db.collection('Todos').deleteOne({item:'Teaching Textbooks'}).then((res) => {
    //   console.log(res);
    // })
    //FindOneAndDelete
    // db.collection('Users').findOneAndDelete({name:'Sharan'}).then((res) => {
    //   console.log(res);
    // })
    // console.log(array);
    // db.close();
});
