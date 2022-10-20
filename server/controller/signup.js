const UserDetails = require("./../model/CustomerDetails");

let detail;

const createuser = async(req,res,next)=> {
    
    try{
        const {Name,Email,Mobile,Password,City,State} = req.body;

        detail = await UserDetails.create({
            name: Name,
            email_id:Email,
            mobile:Mobile,
            password:Password,
            city:City,
            state:State,
        })
        res.status(201).json({
            status : "success",
            message : "Account created successfully"
        })
    }
    catch(err){}
        res.status(400).json({
            status : "failed",
            message : err.message
        })
    }


module.exports = {createuser};