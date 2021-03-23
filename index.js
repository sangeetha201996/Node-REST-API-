const express = require('express');
const bodyParser = require('body-parser');
//import bodyParser from 'body-parser'


const userRoutes = require('./routes/users.js');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', userRoutes );

app.get('/', (req,res) => res.send('Hello from home page'));

app.listen(PORT, () => console.log(`Server Runing osan Port: http://localhost/${PORT}`));


