import mongoose from "mongoose";
const CustomerSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})
 

export const CustomerModel = mongoose.model("Customer", CustomerSchema);