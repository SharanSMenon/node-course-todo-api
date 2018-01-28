var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
var Todo = mongoose.model('Todo',{
    item:{
        type: String
    },
    completed:{
        type: Boolean
    },
    completedAt:{
        type: Number
    }
});
// var newTodo = new Todo({
//     item:'Cook Dinner',
// });
// newTodo.save().then((doc) => {
//     console.log('Saved!', doc);
    
// }, (e) => {
//     console.log('Unable to save todo');
    
// });
var challengeTodo = new Todo({
    item:'TT',
    completed:true,
    completedAt:1
});
challengeTodo.save().then((doc) => {
    console.log('Saved!', doc);
    
}, (e) => {
    console.log('Unable to save todo');
    
});