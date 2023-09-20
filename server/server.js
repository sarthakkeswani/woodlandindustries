const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const db = process.env.DB_URI;


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(db);
    console.log("db connected")
}

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    phno: Number,
    message: String,
  });

const User = mongoose.model('User',userSchema);

app.use(cors());
app.use(bodyParser.json());

app.post("/api", async (req,res) => {

    let user = new User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.phno = req.body.phno;
    user.message = req.body.message;
    const doc = await user.save();
    console.log(req.body)
    res.json(req.body)
})

app.get('/api', async (req,res)=> {
    const docs = await User.find({})
    res.json(docs)
})

app.listen(port ||5000, () => {
    console.log("Server started on port 5000")
});