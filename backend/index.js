const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const InfoRoute = require('./routes/Info.js')
const TestiRoute = require('./routes/Testimoni.js')

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, { 
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});



app.use("/petAdoption/v1", InfoRoute);
app.use("/petAdoption/v1/testimoni", TestiRoute);

app.listen(PORT, () => {
    console.log(`server is up and running on ${PORT}`);
})