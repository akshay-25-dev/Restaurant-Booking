import mongoose from "mongoose";

const dbConnection =  () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "restaurant_booking",
         
    }).then(() => {
        console.log("Connected to MongoDB");
    }).catch((error) => {
        console.error(`Error connecting to MongoDB: ${error}`);
    });
};


export default dbConnection