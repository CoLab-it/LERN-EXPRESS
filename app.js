const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Import routers
const userRouter = require("./router/user");
const productRouter = require("./router/product");

// Middleware to parse JSON bodies
app.use(express.json());

// Connect router
app.use("/user", userRouter);
app.use("/product", productRouter);

// Example of a POST and application level middleware
// app.post("/create-user", async (req, res) => {

// })

app.get("/", (req, res) => {
    try {
        console.log("hi hellow");
    
        res.send("Hello World");
    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }

})

app.listen(3000, () => {
    mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
        console.log("Server is running on port 3000");
    })
    .catch((err) => {
        console.log("Error connecting to the database", err);
    })
})