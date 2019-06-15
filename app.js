var express = require("express");
var next = require("next");
var properties = require("./config/properties");
var db = require("./config/database");
const dev = process.env.NODE_ENV !== 'production';
var app = next({ dev });
var cors = require('cors');
var product = require('./models/products');
var handle = app.getRequestHandler();
var stripe = require("stripe")("sk_test_DGsvrshHfoVcZsezOPRRztuZ");
db();

app.prepare().then(function() {
    var server = express();
    server.use(require("body-parser").text());
    server.use(express.json());
    server.use(cors());
    server.use(express.static('public'));

    server.get("/api/products", (req, res, next) => {
        product.find({}, function(err, products) {
            res.json(products);
        });
    });


    server.post("/api/products", (req, res, next) => {
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

    server.get('/api/products/:id', function(req, res) {
        product.findById(req.params.id, function(err, product) {
            if(err) res.json(err);
            res.json(product);
        })
    });

    server.get('/product/:id', function(req, res) {
        return app.render(req, res, '/product', { id: req.params.id })
    });

    server.post('/charge', async function(req, res) {
        try {
            let { status } = await stripe.charges.create({
                amount: 4000,
                currency: "usd",
                description: "Pay",
                source: req.body
            });
            res.json({status});
        } catch (err) {
            res.status(500).end();
        }
    });

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(properties.PORT, () => {
        console.log("Server running on port 3000");
    });

})
