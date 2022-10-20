const mongoose = require('mongoose')
const Schema=mongoose.Schema;

const Events = new Schema({

    Event_Type : {
        type : String,
        required : [true, "Event Type is Nescessary"],
    },
    Package_Type : {
        type : String,
        required : [true, "Package Type is Nescessary"],
    },
    Price : {
        type: Number,
        required: [true, "Event Price is is required for particular event"],
    },
    Decription : {
        type : String,
        required : [true, "Event Description is avialable for Particular course"],     
    },
    Date_of_event : {
        type: Number,
        required : [true, 'Event Date is needed'],
    },
    Booked_date : {
        type: Number,
        required : [true, 'Event Booked Date is nescessary for Intimation'],
    },
    customer_Id : {
        type:number,
        required:[true,"Customer Id is required for Booking an Event"],
    }
})

module.exports = mongoose.model('Events', Events)