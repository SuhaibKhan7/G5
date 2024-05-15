const express = require('express');
const cors = require('cors')
const server = express();

server.use(cors())

server.get('/data', (req, res) => {

    res.send({ username: 'help' });

})
server.post('/data', (req, res) => {
    req.send(req)
    console.log(req.body)
})



server.listen(5000, () => {
    console.log('server started');
})