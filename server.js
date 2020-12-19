const mongoose = require("mongoose");

mongoose
    .connect('mongodb://127.0.0.1/lester_db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch(err => {
        console.log(err);
    });
