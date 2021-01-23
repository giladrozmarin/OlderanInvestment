const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
//connect to DB
require('./configs/database');
 
 
// configure the body-parser
// to accept urlencoded bodies
// and json data
app.use(bodyParser.urlencoded({ extended: true }))  
   .use(bodyParser.json());
app.use(cors())
app.use('/api', usersRoutes);

   
app.listen(3001);
