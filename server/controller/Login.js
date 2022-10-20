const User = require("../model/LoginDetails")

const login = (req,res)=> {
    const {emailID, password} = req.body;
    try{
        User.findOne({$and:[{"email_id":emailID},{'password':password}]}, (err,user) => {
            if(err) {
                throw err
            }
            if(user){
                res.json({
                    message: "Login Successfull"
                })
            }
            else{
                res.json({
                    message: 'No user Found'
                })
            }
        })
    }
    catch (err){
        console.log(err)
    }
}
module.exports = {login};