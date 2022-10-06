const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({path: `${__dirname}/config.env`});
const app = require("./app");

const DB=process.env.DATABASE.replace(
    "<PASSWORD>", process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {
    useNewUrlParser: true,
    //useUnifiesTopology: true,
}).then(()=>{
    console.log("DB Connected Successfully");
}).catch((err) => {
    console.log("Error");
    console.log(err);
});

const port = process.env.PORT;

app.listen(port, (err) => {
    if(err) console.log("Server not connected");
    else {
    console.log("Server Started");
    console.log(`App running on port ${port}`);
    }
})