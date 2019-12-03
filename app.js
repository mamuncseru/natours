const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const compression = require('compression')
const app = express();
const tourRouter = require('./routes/tourRouters');
const userRouter = require('./routes/userRouters');

app.use(compression());

//1) middlewares
if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'));
}
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`))
app.use((req, res, next) => {
   // console.log('Hello from the middleware');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;