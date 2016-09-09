var users = require('../controllers/usersController.js');
var polls = require('../controllers/pollsController.js');

module.exports = function(app){
 //show the rout is typed in and what contorrler to call, example call users.show in users.js
 app.get('/users', function(req, res){
     users.show(req,res);
 });

 app.post('/users/create', function(req, res) {
        users.create(req, res);
    });

 app.get('/users/:id', function(req, res){
     users.showOne(req, res);
 });

 app.get('/polls', function(req, res){
     polls.show(req, res);
 });

 app.post('/polls/create', function(req, res){
     polls.create(req, res);
 });

 app.get('/polls/:id', function(req, res){
     polls.showOne(req, res);
 });

 app.post('/polls/vote/:id', function(req, res){
     polls.vote(req, res);
 });

 app.post('/polls/delete/:id', function(req, res){
     polls.delete(req, res);
 });

};
