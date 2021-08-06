var express = require("express"),
    app = express();
var fs = require('fs');

var router = express.Router();

router.get("/graphics-cards", function (req, res) {
    var graphics = [{
        "id": 1,
        "name": 'msi-amd-radeon-rx-6900-xt',
        "img": 'data:image/png;base64,' + fs.readFileSync('./assets/images/1578-msi-amd-radeon-rx-6900-xt-gaming-z-trio-16gb-gddr6.jpeg', 'base64'),
        "manufacture": "Msi",
        "model": "6900",
        "assembler": "",
        "price": "300"
    },
    {
        "id": 2,
        "name": 'asus-rog-strix-geforce-rtx-3090',
        "img": 'data:image/png;base64,' + fs.readFileSync('./assets/images/1696-asus-rog-strix-geforce-rtx-3090-gaming-oc-24gb-gddr6x.jpeg', 'base64'),
        "manufacture": "Asus",
        "model": "3090",
        "assembler": "",
        "price": "290"
    },
    {
        "id": 3,
        "name": 'msi-SX450',
        "img": 'data:image/png;base64,' + fs.readFileSync('./assets/images/51Avu5iodlL._SX450_.jpg', 'base64'),
        "manufacture": "Msi",
        "model": "SX450",
        "assembler": "",
        "price": "100"
    },
    {
        "id": 4,
        "name": 'msi-AC-SX450',
        "img": 'data:image/png;base64,' + fs.readFileSync('./assets/images/51uI1khXouL._AC_SX450_.jpg', 'base64'),
        "manufacture": "Msi",
        "model": "SX450",
        "assembler": "",
        "price": "110"
    },
    {
        "id": 5,
        "name": 'msi-SY450',
        "img": 'data:image/png;base64,' + fs.readFileSync('./assets/images/71Tmx-qnp-L._AC_SY450_.jpg', 'base64'),
        "manufacture": "Msi",
        "model": "SY450",
        "assembler": "",
        "price": "90"
    },
    {
        "id": 6,
        "name": 'GeForce-RTX-2080',
        "img": 'data:image/png;base64,' + fs.readFileSync('./assets/images/GeForce-RTX-2080-GAMING-X-TRIO.png', 'base64'),
        "manufacture": "Msi",
        "model": "RTX-2080",
        "assembler": "",
        "price": "250"
    }, 
    {
        "id": 7,
        "name": 'MSI-GeForce-RTX-3060',
        "img": 'data:image/png;base64,' + fs.readFileSync('./assets/images/NVIDIA-MSI-GeForce-RTX-3060-Gaming-X-12G-Graphics-Card.webp', 'base64'),
        "manufacture": "Msi",
        "model": "RTX-3060",
        "assembler": "",
        "price": "240"
    },
    {
        "id": 8,
        "name": 'Msi-4000',
        "img": 'data:image/png;base64,' + fs.readFileSync('./assets/images/o201808201633495922.png', 'base64'),
        "manufacture": "Msi",
        "model": "4000",
        "assembler": "",
        "price": "320"
    },
    {
        "id": 9,
        "name": 'Msi-4100',
        "img": 'data:image/png;base64,' + fs.readFileSync('./assets/images/product_0_20190222171034_5c6fbc8a6dc4f.png', 'base64'),
        "manufacture": "Msi",
        "model": "4100",
        "assembler": "",
        "price": "300"
    },
    {
        "id": 10,
        "name": 'Msi-4200',
        "img": 'data:image/png;base64,' + fs.readFileSync('./assets/images/product_3_20190813170048_5d527c4078cf9.png', 'base64'),
        "manufacture": "Msi",
        "model": "4200",
        "assembler": "",
        "price": "300"
    },
    {
        "id": 11,
        "name": 'Msi-4300',
        "img": 'data:image/png;base64,' + fs.readFileSync('./assets/images/Video-card-MSI-NVIDIA-GeForce-RTX-3070-VENTUS-3X-8GB-GDDR6-OC-Ret-gaming-PC-high.jpeg_q50.jpeg', 'base64'),
        "manufacture": "Msi",
        "model": "430",
        "assembler": "",
        "price": "300"
    },
    {
        "id": 12,
        "name": 'asus-rog-strix-geforce-rtx-3090',
        "img": 'data:image/png;base64,' + fs.readFileSync('./assets/images/1696-asus-rog-strix-geforce-rtx-3090-gaming-oc-24gb-gddr6x.jpeg', 'base64'),
        "manufacture": "Asus",
        "model": "3090",
        "assembler": "",
        "price": "300"
    }];
    
    res. header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(graphics);
});

app.use(router);

app.listen(3000, function () {
  console.log("Node server running on http://localhost:3000");
});