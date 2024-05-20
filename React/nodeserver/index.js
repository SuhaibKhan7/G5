const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://singup:dgDao0zoF8ssh4vz@cluster67376.kmci2em.mongodb.net/?retryWrites=true&w=majority&appName=Cluster67376');

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
    const user = User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.save();
    res.send({ msg: 'data Received' })

})

server.post('/login', async (req, res) => {
    // const user = User();
    const loginuser = req.body.username;

    try {
        const usr = await User.findOne({ username: loginuser })

        if (usr) {
            res.send({ msg: 'Login Successfull' })
        }
        else {
            res.json({ msg: 'login unsuccessfull' })
        }

    } catch (error) {
        console.log('error: ' + error);
    }




})



server.listen(5000, () => {
    console.log('server started');
})