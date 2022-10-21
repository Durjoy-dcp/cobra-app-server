const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const catagories = require('./data/catagory.json');
const cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello world');
})
app.get('/news-catagory', (req, res) => {
    res.send(catagories);
})
app.listen(port, () => {
    console.log(`Port is running in ${port}`)
})