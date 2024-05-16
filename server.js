

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
// app.get('/chicken',(req, res)=>{
//   res.send('sur sir i would love cchiken')
// })

// app.listen(3000)

const express = require('express');
const app = express();
const db=require('./db');
const bodyPerser=require('body-parser');
app.use(bodyPerser.json());


// const MenuItem = require ('./models/Menuitem')

app.get('/', function (req, res){
  res.send('Hello World!');
});
// app.post('/person',  async function (req, res){
//   try{
//     const data=req.body //
//     const newPerson =  new Person(data);
    
// const response = await newPerson.save();
// console.log('data saved')
// res.status(200).json(response);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error:'internal server error'});
//   }

  

// });

// app.get('/person', async function(req,res){
//   try{
//     const data= await Person.find();
//     console.log('data fatched')
//     res.status(200).json(data);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error:'internal server error'});
//   }
// })

// app.get('/person/workType',async function(req,res){
//   try{
//     const workType=req.params.worktype; // Extract the work type from the url parameter
//   if(workType=='chef'||workType=="manager"||workType=='waiter'){
//     const data= await Person.find({work:workType});
//     console.log('data fatched')
//     res.status(200).json(data);

//   }else{
//     res.status(400).json({error:'invalid work type'});
//   }
// }catch(err){
//     console.log(err);
//     res.status(500).json({error:'internal server error'});
  
//   }
// })




// app.get('/chiken',function(req, res) {
//     var customize_idli={
//         name: 'rava idli',
//         price: 100,
//         quantity: 1,
//         total_price: 100
//     } 
//   res.send(customize_idli);
// });
// app.post('/items', function (req, res){
//   res.send('my name is Subrat');
// });

//import the router files
const personRoutes=require('./routes/personRoutes')

app.use('/person',personRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});