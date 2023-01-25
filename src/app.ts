import dotenv from "dotenv";
dotenv.config();
import express from "express";
import router from "./router/index.router";
import MongoConnect from "./database/connect.database";
import path from "path";
import fs from "fs";
const directoryExists = fs.existsSync(path.basename(__dirname+"/uploads"));
const app = express();

if(!directoryExists) {
    fs.mkdirSync("uploads");
}

MongoConnect();
app.use(express.json());

app.use("/pictures", router);

export default app;