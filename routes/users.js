const express = require('express');
const router = express.Router();
//const { uuid } = require('uuidv4');
const { uuid } = require('uuidv4');


var users = [];

router.get('/', (req,res) => {
    //console.log("users");

    res.send(users);

});

router.post('/', (req,res) => {
   //console.log("Post Route Reached");

   const user = req.body;

   const userId = uuid();
   console.log(userId);
   users.push({ ...user, id: uuid() });

   res.send(`User with user name ${user.firstName} added to the database`);

});

router.get('/:id', (req,res) => {
    const { id } = req.params;
    const founduser =  users.find((user) => user.id == id );
    res.send(founduser);

});

router.delete('/:id',(req,res) => {
    const { id } = req.params;

     users = users.filter((user) => user.id != id);
    res.send(`user with the id ${id} is deleted`);
});

router.patch('/:id', (req,res) => {
    const { id } = req.params;
    const{ firstName, lastName, age } = req.body;
    
    const user = users.find((user)=> user.id == id);

   
    if(firstName){
        user.firstName = firstName;
    }

    if(lastName){
        user.lastName = lastName;
    }

    if(age){
        user.age = age;
    }

    res.send(`user with the id ${id} got updated.`)

});

module.exports = router;