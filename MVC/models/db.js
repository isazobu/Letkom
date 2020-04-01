var mongoose = require('mongoose')

let uri = 'mongodb://localhost/LETKOM';



mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log("DB CONNECTED");
})

mongoose.connection.on('error', (err) => {
    console.log(`DB HATA : ${err}`);
})
mongoose.connection.on('disconnected', () => {
    console.log("DB BAGLANTI SONLANDI");
})


const shutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};



process.once('SIGUSR2', () => {
    shutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});


process.on('SIGINT', () => {
    shutdown('app termination', () => {
        process.exit(0);
    });
});


process.on('SIGTERM', () => {
    shutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

require('./User');
require('./Product');