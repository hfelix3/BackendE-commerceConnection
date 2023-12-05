const express = require('express');
const routes = require('./routes');
//TODO: import sequelize connection
const sequelize = require ('../config/connection');

// TODO: import models
const category = 

// initialize application
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// initialize connection
// TODO: add sequelize.sync().then(() => {
// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})

});