const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

const MONGODB_URL = "mongodb+srv://CS628:CS628DBTEST@cluster0.uzydhqj.mongodb.net/test"

exports.connect = () => {
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(
        console.log('DB is connected!')
    ).catch((error) => {
        console.log('DB connection failed');
        console.log(error);
        process.exit(1)
    })
}