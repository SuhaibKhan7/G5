const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://mycluster:7eSQxScZMaKQBZUq@atlascluster.xlm0rrn.mongodb.net/');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    username: String,
    password:String

});
const User = mongoose.model('Userdata', userSchema);






const server = express();
server.use(cors())
server.use(express.json())




server.get('/data', (req, res) => {
    res.send('hi');
})
server.post('/data', (req, res) => {

    const user=new User();
    user.username=req.body.username;
    user.password=req.body.password
    user.save();
    console.log(req.body.username)
    res.send({ msg: "Data rec" })
})



server.listen(5000, () => {
    console.log('server started');
})