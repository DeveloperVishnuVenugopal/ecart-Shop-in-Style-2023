
const mongoose = require ('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Mongodb Atlas Connected successfully");

}).catch((err)=>{
    console.log("Connection Failed:",err);
})