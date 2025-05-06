import express from "express";

import {
  getUsers, //importing the getUsers function from the controller
  getUserById, //importing the getUserById function from the controller
  saveUser, //importing the saveUser function from the controller
  updateUser, //importing the updateUser function from the controller
  deleteUser, //importing the deleteUser function from the controller
} from "../controllers/UserController.js"; //importing the user controller

const router = express.Router(); //creating a router object
router.get("/users", getUsers); //get request to get all users
router.get("/users/:id", getUserById); //this will fetch a single user by passing the id in the url
router.post("/users", saveUser); //post request to save a user
router.patch("/users/:id", updateUser); //patch request to update a user
router.delete("/users/:id", deleteUser); //delete request to delete a user

export default router; //exporting the router object
