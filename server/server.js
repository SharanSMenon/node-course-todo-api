const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');
var {
    mongoose
} = require('./db/mongoose');
var {
    Todo
} = require('./models/todo');
var {
    User
} = require('./models/user');

var app = express();
app.use(bodyParser.json());
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);

    }, (err) => {
        res.status(400).send(err);
    });

});
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    },(err) => {
        res.status(400).send(e)
    });
})
app.get('/todos/:id',(req,res) => {
    var id = req.params.id;
    //Validate Id
    if(!ObjectId.isValid(id)){
        return res.status(404).send();
    };
    //Make query
    Todo.findById(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        };
        //Success
        res.send({
            todo,
            status:200
        });
    }).catch((e) => res.status(400).send())
    
})
app.listen(3000, () => {
    console.log(`Server is up on port 3000`);

});
module.exports = {app}