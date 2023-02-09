const express = require ('express');
const app = express();
const port = 3400
const path = require ('path');

app.use (express.static(__dirname + "./public"));

app.listen(port, () => {
    console.log("servidor funcionando en puerto " + port);
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/home.html'))
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/login.html'))
})
app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/register.html'))
})
app.use(express.static("public"));