const {ObjectID} = require('mongodb')
const {mongoose} = require("./../server/db/mongoose");
const {User} = require('./../server/models/user');
const {Todo} = require("./../server/models/todo");
// var id = '5a820a13e610eb7a3c79743711';
// if (!ObjectID.isValid(id)){
//     console.log("Id not valid")
// }
// Todo.find({
//     _id:id
// }).then((todos) => {
//     console.log('Todos',todos);
// });
// //findOne
// Todo.findOne({
//     _id:id
// }).then((todo) => {
//     console.log('Todo',todo);
// });
// Todo.findById(id).then((todo) => {
//     if(todo === null){
//         return console.log("Todo not found")
//     }
//     console.log('Todo By Id',todo)
// }).catch((e) => console.log(e));
User.findById('5a9088b92c7426eb2acf45ec').then((user) => {
    if(!user){
        return console.log('Unable to find user');        
    }
    console.log(JSON.stringify(user,undefined,2));
    
},(e) => {
    console.log(e)
});