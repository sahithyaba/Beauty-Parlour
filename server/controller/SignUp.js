const CustomerDetails = require("./../model/CustomerDetails");
const LoginDetails = require("./../model/LoginDetails");

let detail,acc;

const createuser = async(req,res,next)=> {
    
    try{
        const {Name,EmailId,Mobile,Password,City,State} = req.body;
       
        acc = await LoginDetails.create({
            email_id:EmailId,
            password:Password,
            account_type:"Customer"
        })

        detail = await CustomerDetails.create({
            name: Name,
            mobile_no: Mobile,
            place : {city: City, state: State},
            login_id: acc._id
        })

        res.status(200).json({
            status : "success",
            message : "Account created successfully",
            UserId : acc._id
        })
    }
    catch(err){
        if(acc) {await LoginDetails.deleteOne({_id: acc._id})}
        if(detail) {await CustomerDetails.deleteOne({_id: detail._id})}
        res.status(400).json({
            status : "failed",
            message : err.message
        })
    }

}

module.exports = {createuser};