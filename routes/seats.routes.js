const express = require('express');
const router = express.Router();
let db = require('../db');

router.route('/seats').get((req, res) => {
    res.json(db.seats);
});

router.route('/seats/:id').get((req, res) => {
    res.json(db.seats[req.params.id - 1]);
});

router.route('/seats').post((req, res) => {
    const seat = {
        id: (db.seats.length + 1),
        day: req.body.day,
        seat: req.body.seat,
        client: req.body.client,
        email: req.body.email,
    };

    if (seat.day && seat.seat && seat.client && seat.email &&
        !db.seats.some(
          (element) =>
            element.seat == seat.seat && element.day == seat.day
        )) {
        db.seats.push(seat);
        res.json({ message: 'OK' });
      } else if (
        seat.day && seat.seat && seat.client && seat.email &&
        db.seats.some(
          (element) =>
            element.seat == seat.seat && element.day == seat.day
        )
      ) {
        res.status(409).json({ message: 'The slot is already taken...' });
      } else {
        res.status(404).json({ message: '404 not found...' });
      };
    });

router.route('/seats/:id').put((req, res) => {
    db.seats.forEach(seat => {
        if(seat.id == req.params.id) {
            seat.day = req.body.day;
            seat.seat = req.body.seat;
            seat.client = req.body.client;
            seat.email = req.body.email;
        }
    });
    return res.json({
        message: 'ok'
    });
});

router.route('/seats/:id').delete((req, res) => {
    db.seats.forEach(seat => {
        if(seat.id == req.params.id) {
            const index = db.seats.indexOf(seat);
            db.seats.splice(index, 1);
        }
    });
    return res.json({
        message: 'ok'
    });
});

module.exports = router;
