var express = require("express");
var throttle = require('lodash/throttle');
var router = express.Router();


var obj = {
    "name": "Hoth2",
    "rotation_period": "23",
    "orbital_period": "549",
    "diameter": "7200",
    "climate": "frozen",
    "gravity": "1.1 standard",
    "terrain": "tundra, ice caves, mountain ranges",
    "surface_water": "100",
    "population": "unknown",
    "residents": [],
    "films": ["https://swapi.co/api/films/2/"],
    "created": "2014-12-10T11:39:13.934000Z",
    "edited": "2014-12-20T20:58:18.423000Z",
    "url": "https://swapi.co/api/planets/4/"
};

router.get("/", function (req, res, next) {
    res.send(JSON.stringify(obj))
});

module.exports = router;