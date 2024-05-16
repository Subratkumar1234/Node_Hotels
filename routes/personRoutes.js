const express=require('express');
const router=express.Router();
const Person=require('./../models/person');

//  Post method
router.post('/',  async function (req, res){
    try{
      const data=req.body // 
      const newPerson =  new Person(data);
      
  const response = await newPerson.save();
  console.log('data saved')
  res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'new server error'});
    }
  
    
  
  });

  //get method

  router.get('/', async function(req,res){
    try{
      const data= await Person.find();
      console.log('data fatched')
      res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
  })

  // router.get('/workType',async function(req,res){
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

  router.put('/:id',  async function (req, res){
    try{
      const personId=req.params.id; // Extract the id from the url parameter
      const updatedPersonData=req.body; // Extract the data from the request body
      const response= await Person.findByIdAndUpdate(personId,updatedPersonData,{new:true}); // Update the person with the new data
      

      if(!response){
        res.status(404).json({error:'person not found'});
        return;
      }
      console.log('data updated')
      res.status(200).json(response);



    }catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
  })

  //Delete method...
  router.delete('/:id',  async function (req, res){
    try{
      const personId=req.params.id; // Extract the id from the url parameter
      const response= await Person.findByIdAndDelete(personId); // Update the person with the new data
      if(!response){
        res.status(404).json({error:'person not found'});
        return;
  }
  console.log('data deleted')
  res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }

  })

  module.exports=router;