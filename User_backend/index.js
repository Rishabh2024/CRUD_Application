import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js"; //importing the user routes

const app = express(); //app object

// connecting with the mongodb cluster
mongoose.connect(
  "mongodb+srv://rishabhpal326:i68Gab6WvSy8luYT@cluster0.8jgjksp.mongodb.net/rishabh?retryWrites=true&w=majority&appName=Cluster0"
);

const db = mongoose.connection; //db object
db.once("open", () => console.log("database is connected")); //once connected to the database, log it in the console
db.on("error", () => console.log("Error connecting to the database")); //if error occurs while connecting to the database, log it in the console

app.use(cors()); //use cors to allow cross-origin requests
app.use(express.json()); //use express.json() to parse incoming requests with JSON payloads
app.use(UserRoute); //use the user routes
app.listen(5000, () => console.log("server is up and running ")); //listen on port 5000 and log it in the console
 

// test  one