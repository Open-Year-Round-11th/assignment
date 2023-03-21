const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/Login.html")
})

app.get('/main', (req, res) => {
    res.sendFile(__dirname + "/main.html")
})

app.post('/main', (req, res) => {
    res.sendFile(__dirname + "/main.html")
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})

