const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');



main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://singup:rdgeX2uuNPRyARne@cluster67376.kmci2em.mongodb.net/?retryWrites=true&w=majority&appName=Cluster67376');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});
const User = mongoose.model('userdata', userSchema);


const server = express();
server.use(cors())
server.use(express.json())




server.get('/data', (req, res) => {
    res.send('hi');
})
server.post('/data', (req, res) => {
    const user = new User();
    user.username = req.body.username,
        user.password = req.body.password
    user.save();


    console.log(req.body.username)
    res.send({ msg: "Data rec" })
})
server.post('/login', async (req, res) => {
    res.send({ msg: 'under login' })
    const user = new User();
    const loginname = req.body.username;


    const validuser = await user.find({ username: loginname })

    if (validuser) {
        res.send({ msg: 'loginsuccessfull' })
    }
    else {
        res.send({ msg: 'login unsuccessfull' })
    }

})





server.listen(5000, () => {
    console.log('server started');
})