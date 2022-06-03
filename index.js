const express = require("express");
const app = express();
app.listen(5000)
app.set("view engine", "ejs");
app.use("/public", express.static(require("path").resolve() + "/static"))


app.get("/", (req, res) => {
    res.render("")
})