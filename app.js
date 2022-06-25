const bodyParser = require("body-parser");

const express = require("express");




app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
items = [];


app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {

    res.render("list", { listTitle: "Work List", listitemejs: items });

});


app.post("/", (req, res) => {

    newItem=req.body.newItem;

        if (newItem == "" || newItem == " ") {}
        else {items.push(newItem);}

        res.redirect("/");
});











app.listen(3000, () => {

    console.log("listning on port 3000");


});

