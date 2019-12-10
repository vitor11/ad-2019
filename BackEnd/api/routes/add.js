var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    var db = require('../db');
    var Customer = db.Mongoose.model('amigos', db.CustomerSchema, 'amigos');
    var newcustomer = new Customer({ name: req.body.name, email: req.body.email, friend: req.body.friend});
    newcustomer.save(function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json(newcustomer);
        res.end();
    });
});

module.exports = router;
