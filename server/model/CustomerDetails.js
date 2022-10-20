const mongoose = require('mongoose');
const Courses = require('./Courses');
const Schema=mongoose.Schema;

const CustomerDetailsSchema = new Schema({

    name : {
        type : String,
        required : [true, "Name is required to create a Account"],
    },
    mobile_no : {
        type: Number,
        required: [true, "Phone Number is required for creating an account"],
        min: [1000000000, "Enter a Valid Phone number"]
    },

    login_id : {
        type: mongoose.SchemaTypes.ObjectId,
    },
    place : {
        city : {
            type : String,
            required : [true, "City name is required"]
        },
        state : {
            type : String,
            required : [true, "State name is required"]
        }
    },
    Booked_Items:{
        Booked_Courses/*other names given in Taskade Events and Services Id*/: [{
            type: Number,
            required: [true, "Number of Courses or Events booked is Required"],
        }],
        Timing:{
            type:Number,
            required:[true,"Timing for Particular Event or Booked Events or Courses is required"],
        }
    } 
})

module.exports = mongoose.model('CustomerDetails', CustomerDetailsSchema)