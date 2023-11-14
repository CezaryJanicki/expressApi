const express = require('express');
const router = express.Router();
let db = require('../db');

router.route('/testimonials').get((req, res) => {
    res.json(db.testimonials);
});

router.route('/testimonials/:id').get((req, res) => {
    res.json(db.testimonials[req.params.id - 1]);
});

router.route('/testimonials').post((req, res) => {
    const person = {
        id: (db.testimonials.length + 1),
        author: req.body.author,
        text: req.body.text,
    }
    db.test.push(person);
    return res.json({
        message: 'ok'
    });
});

router.route('/testimonials/:id').put((req, res) => {
    db.testimonials.forEach(person => {
        if(person.id == req.params.id) {
            person.author = req.body.author;
            person.text = req.body.text;
        }
    });
    return res.json({
        message: 'ok'
    });

});

router.route('/testimonials/:id').delete((req, res) => {
    db.testimonials.forEach(person => {
        if(person.id == req.params.id) {
            const index = db.test.indexOf(person);
            db.test.splice(index, 1);
        }
    });
    return res.json({
        message: 'ok'
    });

});

module.exports = router;