const mongoose = require("mongoose");

const connectToDB = ()=>{
    mongoose
    .connect(process.env.MONGO_URI)
    .then((conn)=>{
        console.log(`connected to ${conn.connection.host}`);
    })
    .catch((error)=>{
        console.log(error.message);
    })
}

module.exports = connectToDB;