const mongoose = require('mongoose');
const db = "123";

const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
          })

        console.log('Database connected...')
    } catch(err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;