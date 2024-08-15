const express = require("express");

const app = express();


app.get("/login", (req, res) => {
    console.log("login api called");
    res.json({
        success: "true",
        message: "Login Get Api",
    });
});

app.listen(10000, () => {
    console.log("Express server is running at port 10000");
});