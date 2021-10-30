const express = require("express")
const app = express()

const UserRoute = require('./routes/UserRoute')

const VenueRoute = require('./routes/VenueRoute')
const VenueFeeGroupRoute = require('./routes/VenueFeeGroupRoute')
const VenueFeeRoute = require('./routes/VenueFeeRoute')

app.use(express.json({ extended: true }));

app.use('/User', UserRoute)

app.use('/Venue', VenueRoute)
app.use('/VenueFeeGroup', VenueFeeGroupRoute)
app.use('/VenueFee', VenueFeeRoute)


app.listen(8081)