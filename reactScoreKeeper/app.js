const 
    express = require('express'),
    app = express(),
    handlebars = require('express-handlebars'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json({
    extended: true
}))


app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}))

app.use((req, res, next) => {
    res.setHeader("X-Frame-Options", "ALLOWALL");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "POST, GET, PUT, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Authorization, Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.set("view engine", 'handlebars');
app.use(express.static('public'));


const routerGame = require('./modules/api/game/router')

app.get('/', (req, res) => {
    res.sendfile("./index")
})

app.use("/api/games", routerGame)

mongoose.connect('mongodb://localhost/minihack', (err) =>{
    if(err) console.log(err);
    console.log("Database connect success!");
});

app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    }else {
        console.log("app is starting at port 8080");
    }
})