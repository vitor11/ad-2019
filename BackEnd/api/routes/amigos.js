var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var db = require('../db');
    var Customer = db.Mongoose.model('amigos', db.CustomerSchema, 'amigos');
    Customer.find({}).lean().exec(function(e,docs){
       res.json(docs);
       res.end();
    });
});


router.put('/:id', function (req, res, next) {

    var db = require('../db');
    var Customer = db.Mongoose.model('amigos', db.CustomerSchema, 'amigos');
    Customer.findOneAndUpdate({ _id: req.params.id }, req.body, { upsert: true }, function (err, doc) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json(req.body);
        res.end();
    });
 });


router.delete('/:id', function (req, res, next) {
    var db = require('../db');
    var Customer = db.Mongoose.model('amigos', db.CustomerSchema, 'amigos');
    Customer.find({ _id: req.params.id }).remove(function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json({success: true});
        res.end();
    });
});


module.exports = router;
