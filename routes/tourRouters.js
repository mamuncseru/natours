const express = require('express');
const tourController = require('./../controllers/tourController');

const Router = express.Router();

//Router.param('id', tourController.checkID);
//Create a checkbody middleware
//check if body contains the name and price property
//If not, send back 400(bad request)
//Add it to the post handler stack
Router
.route('/')
.get(tourController.getAllTours)
.post(tourController.createTour);


Router
.route('/:id')
.get(tourController.getTour)
.patch(tourController.updateTour)
.delete(tourController.deleteTour)

module.exports = Router;