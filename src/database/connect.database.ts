/* eslint-disable indent */
import mongoose from "mongoose";
import { connect } from "mongoose";
import express from "express";
const app = express();

mongoose.set("strictQuery", true);

function MongoConnect() {
    connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wvthnwq.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(27017, () => {
            console.log("Database connected! port: 27017");
        });
    })
    .catch((err) => {
        console.log({database_connect_error: err});
    });
}

export default MongoConnect;