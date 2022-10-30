// dependencies
const express = require("express");

// express.js config
const app = express();

// set intitial port
const PORT = process.env.PORT || 3000;

// enable parsing in express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});