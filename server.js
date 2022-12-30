const app = require("./app");
PORT=process.env.PORT || 4000;


app.listen(PORT,()=>{
    console.log("listening at port");
})