const mongoose = require('mongoose')
const Schema=mongoose.Schema;

const ServicesSchema = new Schema({
    Service_name : {
        type : String,
        required : [true, 'Service Name is required'],
    },
    description : {
        type : String,
        required : [true, 'Service Description is required'],
    },
    price : {
        type : Number,
        min : 0,
        required : [true, 'Service Price must be mentioned'],
    },
    booked_date : {
        type : Date,
        required : [true, 'Service Booked date is needed'],
    }
})

module.exports = mongoose.model('Services', ServicesSchema);