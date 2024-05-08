const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

const {errorMiddleware }= require("./error/error");



app.use(cors({
    origin: [process.env.Frontend_Url],
    methods: ["POST"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const rout = require("./route/reservation")
app.use("/",rout)

require("./db/db").connectDatabase();


app.use(errorMiddleware);


module.exports = app;
