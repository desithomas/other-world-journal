/**
 * This needs a schema for the meals 
 * mealType - string
 * mealDate  - date 
 * mealPoem - string
 * mealAcquired -string
 * mealIngredients - string
 * mealRating - number 
 * 
 * this needs mongoose, mongoose needs a schema and the schema. needs a model 
 */


//load the things we need
const mongoose = require('mongoose')


//define the schema for our user model 
const discoverySchema = mongoose.Schema({
    title: {
       type: String, 
       required: true,    
       trim: true
    }, 
    location: {
        type: String, 
        required: true,
        trim: true
    }, 
    discoveredOn: {
        type: Date, 
        required: true,
        }, 
    description: {
        type: String, 
        required: true,
        trim: true,
    }, 
    mood: {
        type: String, 
        required: true,
        trim: true,
    }, 
    braveryRating: {
        type: Number, 
        required: true,
        min: 1, 
        max: 5
    }, 
    warning: {
        type: String, 
        required: true, 
        trim: true
    }
})

//export the model aka create the model for users and expose it to our app
module.exports = mongoose.model('Discovery', discoverySchema)