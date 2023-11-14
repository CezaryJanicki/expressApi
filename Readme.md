# Express Server

This project is a web server built with Node.js and Express. It serves a client application and provides API endpoints for managing testimonials, concerts, and seats.

## Dependencies

The server uses the following dependencies:

- `express`: A web application framework for Node.js.
- `cors`: A package for providing a Connect/Express middleware that can be used to enable CORS.
- `path`: A Node.js module for working with file and directory paths.

## Routes

The server has routes for testimonials, concerts, and seats. These routes are defined in separate files in the `routes` directory and are imported into the main server file.

- Testimonials routes: `./routes/testimonials.routes`
- Concert routes: `./routes/concerts.routes`
- Seats routes: `./routes/seats.routes`

These routes are all mounted under the `/api` path using `app.use`.

## Middleware

The server uses several middleware functions:

- `cors()`: Enables CORS.
- `express.urlencoded({ extended: false })`: Parses incoming requests with urlencoded payloads.
- `express.json()`: Parses incoming requests with JSON payloads.
- `express.static(path.join(__dirname, '/client/build'))`: Serves static files from the `client/build` directory.

## Error Handling

If a request is made to an endpoint that doesn't exist, the server responds with a JSON object `{ message: 'Not found...' }`.

## Serving the Client Application

For any other GET request, the server responds by sending the file at `client/build/index.html`. This is intended to serve the client application.