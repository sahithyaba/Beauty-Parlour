const mongoose = require('mongoose')
const Schema=mongoose.Schema;

const Course = new Schema({

    Course_Name : {
        type : String,
        required : [true, "Course Name is required for Enrollment"],
    },
    Price : {
        type: Number,
        required: [true, "Course Price is Mentioned"],
    },

    Duration : {
        type: Number,
        required: [true,"Course Duration is Avialable"],
    },
    Decription : {
        type : String,
        required : [true, "Course Description is avialable for Particular course"],     
    },
    Booked_Date : {
        type: Number,
        required : [true, 'Course Booked date is needed'],
    },
    start_date: {
        type:Number,
    },
    End_Date: {
        type:Number,
    },
    customer_Id : {
        type:Number,
        required:[true,"Customer Id is required for enrollment in courses"],
    }
})

module.exports = mongoose.model('Course', Course)