



var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const {graphqlHTTP} = require('express-graphql');
const { resolve } = require('path');
const schema = require('./Schemas/index.js')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/graphql', graphqlHTTP({
  schema,
  graphiql:true // graphql interface
}))
app.listen(3000)
module.exports = app;



