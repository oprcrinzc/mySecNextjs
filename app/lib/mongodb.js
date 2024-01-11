import mongoose from "mongoose";
const connString = "mongodb://oprc:PerAsperaAdAstra@127.0.0.4:27017/?authMechanism=DEFAULT"
const connectMongo = async () => {
    mongoose.connection.readyState == 1 ? '' : mongoose.connect(connString)
}


export default connectMongo