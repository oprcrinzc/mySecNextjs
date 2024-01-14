import mongoose from "mongoose";
const connString = "mongodb://127.0.0.4:27017/pikpok"
// const connString = "mongodb://oprc:PerAsperaAdAstra@127.0.0.4:27017/?authMechanism=DEFAULT"
const connectMongo = async () => {
    mongoose.connection.readyState == 1 ? '' :await mongoose.connect(connString,{
        authMechanism: "DEFAULT",
        authSource:"admin",
        user: "oprc",
        pass:"PerAsperaAdAstra",
        
    })
}


export default connectMongo