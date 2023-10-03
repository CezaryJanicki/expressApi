const express = require('express');

const app = express();

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/', testimonialsRoutes);
app.use('/', concertRoutes);
app.use('/', seatsRoutes);

app.use((req, res) => {
    return res.json({
        message: 'Not found...'
    });
});


app.listen(8001, () => {
    console.log('Server is running on port: 8001');
});