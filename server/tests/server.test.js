//Module imports
const expect = require('expect');
const request = require('supertest');
//Local imports
const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const todos = [{
    text:'test todo 1'
},{
    text:'test todo 2'
}];
beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done())
});
//Main code and test cases
describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test todo';
        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text)
            })
            .end((err, res) => {
                if (err){
                    return done(err);
                }
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(3)
                    expect(todos[0].text).toBe(text);
                    done();
            })
            .catch((e) => done(e))
        });
    });
    it('should not create a todo with invalid body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((e) => done(e));
            });
    })
});