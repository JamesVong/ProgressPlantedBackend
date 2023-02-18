const express = require('express');


const app = express();
const graphs =require("./Routes/growthgraph");
const port = process.env.PORT || 8080;
const bodyParser =require('body-parser');

app.use(bodyParser.json());
let info = [
    {"id": 1, "name": "John", "age": 20},
    {"id": 2, "name": "Jane", "age": 21}
]

app.use('/users',graphs);

app.get("/", (req, res) => {
    res.send("Testing JavaScript!");
})

app.get("/info/:num", (req, res) => {
    res.json(info[req.params.num - 1]);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

