var express = require("express");
var properties = require("./config/properties");
var db = require("./config/database");
var app = express();
var cors = require('cors');
var product = require('./models/products');

db();

app.listen(properties.PORT, () => {
    console.log("Server running on port 3000");
});

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.get("/", (req, res, next) => {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    res.json({
        message: "CLOF REST API",
        time: time
    });
});

app.get("/products", (req, res, next) => {
    product.find({}, function(err, products) {
        res.json(products);
    });
});


app.post("/products", (req, res, next) => {
    var newProduct = new product({
        name: req.body.name,
        price: req.body.price,
        images: req.body.images
    });

    newProduct.save(function(err) {
        if(err) res.json(err);
        res.json({message: "Success"});
    })
});

app.get('/products/:id', function(req, res) {
    product.findById(req.params.id, function(err, product) {
        if(err) res.json(err);
        res.json(product);
    })
});
