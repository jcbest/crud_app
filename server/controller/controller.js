var Userdb = require('../model/model');

//create and save new user
exports.create = (req,res)=>{
if(!req.body){
    res.status(400).send({message:"Content can not be emtpy"});
    return;
    }

    //new user
    const user  = Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    //save user in the database
    user
        .save(user)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message||"Some error occured while creating a new user"
            });
        });
}

// retrieve an return single and all user
exports.find = (req,res)=>{
    Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message ||"Error Occurred while retriving user inormation"})
    })
}

//update a new identified user by id
exports.update = (req,res)=>{
   if(!req.body){
        return res
            .status(400)
            .send({message:"Data to update can not be empty"})
}
const id = req.params.id;
Userdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
.then(data=>{
    if(!data){
        res.status(404).send({message:`an not Update user wit ${id}. Maybe user not found`})
    }else{
    res.send(data)
}
})
.catch(err=>{
    res.status(500).send({message:`Error in Updating user information`})
})
}


//delete a user with specified user id in the request
exports.delete = (req,res)=>{
 

    
}
/**
 * 
 * const id = req.params.id;

 Userdb.findByIdAndDelete(id)
    .then(data={
      if(data){
        res.status(404).send({message: `Cannot Delete with id ${id}. Maybe id is wrong`})
       }else{
        res.send({
            message: "User was deleted succcessfully"
         })
     }
})
.catch(err=>{
    res.status(500).send({
        message:"Could not delete User id = "+ id
    })
})
 */