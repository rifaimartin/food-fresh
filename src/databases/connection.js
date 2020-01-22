import MongoClient from 'mongodb' 
import mongoose from 'mongoose'

export default function Connection() {
    mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000
    })
        .then(() => {
            console.log("Database connected successfully");
        }).catch(err => {
            console.log(`DB Connection Error : ${err}`);
        });
}
