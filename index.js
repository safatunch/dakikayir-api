const express = require("express")
const app = express()

const UserRoute = require('./routes/UserRoute')

const VenueRoute = require('./routes/VenueRoute')
const VenueFeeGroupRoute = require('./routes/VenueFeeGroupRoute')
const VenueFeeRoute = require('./routes/VenueFeeRoute')

app.use(express.json({ extended: true }));

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if ('OPTIONS' == req.method) {
    res.sendStatus(200);
    } else {
      next();
    }
  });

app.use('/User', UserRoute)

app.use('/Venue', VenueRoute)
app.use('/VenueFeeGroup', VenueFeeGroupRoute)
app.use('/VenueFee', VenueFeeRoute)


app.listen(8081)