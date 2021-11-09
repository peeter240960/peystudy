const mongoose = require('mongoose');
const { mongoUrl } = require('./configs');
function DbConnect() {
    // mongoose.set('useFindAndModify', false);
    // Database connection
    mongoose.connect(mongoUrl, {
        useNewUrlParser: true, // <-- no longer necessary
        useUnifiedTopology: true // <-- no longer necessary
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('DB connected...');
    });
}

module.exports = DbConnect;