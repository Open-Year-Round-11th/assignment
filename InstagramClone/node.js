const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use('/InstagramClone', express.static(__dirname + '/InstagramClone'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));



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

