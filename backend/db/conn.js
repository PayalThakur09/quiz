
const mongoose = require("mongoose");

// mongoose.connect('localhost:27017', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const DB = "mongodb://127.0.0.1:27017/internship"

mongoose.connect(DB,{
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));