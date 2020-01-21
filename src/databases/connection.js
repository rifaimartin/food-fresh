import MongoClient from 'mongodb' 


export default function Connection() {
    MongoClient.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, {
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
