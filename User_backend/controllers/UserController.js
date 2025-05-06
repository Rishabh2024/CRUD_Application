import CRUD from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await CRUD.find(); //find all the users
    res.json(users); //return the users in json format
  } catch (error) {
    res.status(500).json({ message: error.message }); //if error occurs, return the error message in json format
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await CRUD.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveUser = async (req, res) => {
  const user = new CRUD(req.body); //data fetched from the postman request body will be store here
  try {
    const inserteduser = await user.save(); //save the user in the database
    res.status(201).json(inserteduser); //return the saved user in json format
  } catch (error) {
    res.status(400).json({ message: error.message }); //if error occurs, return the error message in json format
  }
};

export const updateUser = async (req, res) => {
  try {
    const updateduser = await CRUD.updateOne({_id:req.params.id}, {$set:req.body}
    );
     //update the user in the database
    res.status(200).json(updateduser); //return the updated user in json format
  } catch (error) {
    res.status(400).json({ message: error.message }); //if error occurs, return the error message in json format
  }
};

export const deleteUser=async(req,res)=>{
    try{
const deleteuser=await CRUD.deleteOne({_id:req.params.id});
res.status(200).json(deleteuser);

    }
    catch(error){
res.status(400).json({ message: error.message }); //if error occurs, return the error message in json format
    }
}