const mongoose=require("mongoose");
const mongoURL="mongodb://localhost:27017/new";   //replace service name
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
} )
//get the default connection
//mongoes maintains a default connection object representingnthe mongodb connection.

const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('connected to mongodb');

});
db.once('diconnected',function(){
    console.log('disconnected to mongodb');

});

//Export the data base connection

module.exports=db;

