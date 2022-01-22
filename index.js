const MovieModel = require("./database/movies");
const UserModel = require("./database/users");
const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());

//import the mongoose module
var mongoose = require('mongoose');
//set up default mongoose connection
var mongoDB = "mongodb+srv://shaik_ushma:9NNFVx754nFEpHQ@cluster0.obrsv.mongodb.net/book-my-show?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("CONNECTION ESTABLISHED"));


//https://localhost:3000/
app.get("/", (req, res) => {
    return res.json({
        "WELCOME": `to my Backend Software for the BookMyShow`
    });
});

/*
Route                       /movies
Description                 Get all the movies
Access                      PUBLIC
Parameter                   NONE
Methods                     GET
*/

//https://localhost:3000/movies
app.get("/movies", async (req, res) => {
    const getAllMovies = await MovieModel.find();
    return res.json(getAllMovies);
});

/*
Route                       /movies/:id
Description                 Get a single movie
Access                      PUBLIC
Parameter                   NONE
Methods                     GET
*/

//https://localhost:3000/movies/:id
app.get("/movies/:id", async (req, res) => {
    const {id} = req.params;
    const getMovie = await MovieModel.findOne({_id: id});
    return res.json(getMovie);
});

/*
Route                       /user-register
Description                 Get a single user details in users collection
Access                      PUBLIC
Parameter                   NONE
Methods                     POST
*/

//https://localhost:3000/user-register
app.get("/user-register", async (req, res) => {
    const addNewUser = await UserModel.create(req.body);
    console.log(req.body);
    return res.json({userAdded: addNewUser, message: "User was added !!!!"});
});

app.listen(5000, () => {
    console.log("MY EXPRESS APP IS RUNNING.....")
})