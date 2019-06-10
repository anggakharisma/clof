var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost:27017/clof', function() {

  // Load Mongoose models
  seeder.loadModels([
      'models/products.js',
  ]);

  // Clear specified collections
  seeder.clearModels(['Product'], function() {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });
});

var data = [
    {
        "model": "Product",
        "documents": [
            {
                "name": "Yellow Jacket",
                "price": 1200,
                "images": "/images/yellow-jacket.png"
            },
            {
                "name": "Black Hoodie",
                "price": 2250,
                "images": "/images/black-hoodie.png"
            },
            {
                "name": "Cool Glasses",
                "price": 300,
                "images": "/images/glasses1.png"
            },
            {
                "name": "Shirt One",
                "price": 300,
                "images": "/images/shirt1.png"
            },
            {
                "name": "Shirt Two",
                "price": 335,
                "images": "/images/shirt2.png"
            },
            {
                "name": "T - Shirt One",
                "price": 150,
                "images": "/images/tshirt1.png"
            },
            {
                "name": "T - Shirt Two",
                "price": 150,
                "images": "/images/tshirt2.png"
            },
            {
                "name": "XR Jacket",
                "price": 700,
                "images": "/images/jeans-jacket.png"
            }
        ]
    }
]
