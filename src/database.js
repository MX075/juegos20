const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/chat', {
        useNewUrlParser: true
    })
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));