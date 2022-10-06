const mongoose = require('mongoose')
const Schema=mongoose.Schema;
const {isEmail} = require('validator')

const LoginSchema = new Schema({
    email_id : {
        type : String,
        required: [true,"Email is required for creating an account"],
        unique: [true, "Account related with this email already exists"],
        validate : [isEmail,"Enter a valid Email Address"]
    },
    
    //password with one Uppercase, one lower case, one number, atleast 8 characters

    password : {
        type : String,
        required : [true, 'Password cannot be empty'],
        match : [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,}$/, "Enter a valid Password"],
    },

    account_type: {
        type: String,
        required: [true,"Account Type  is Required"]
    }
});

module.exports = mongoose.model('LoginDetails', LoginSchema);