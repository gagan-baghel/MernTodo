const bodyParser = require("body-parser");

const express = require("express");

const date = require(__dirname+'/date.js')

console.log(date.getDay())


app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

items = ["Buy Food", "Cook food", "Eat food"];

work = [];

app.use(express.static(__dirname + "/public"));

let day = "";

app.get("/", (req, res) => {

    day = date.getDate();
    res.render("list", { listTitle: day, listitemejs: items });

});

app.post("/", (req, res) => {

    newItem=req.body.newItem;

    if (req.body.list === "work") {

        if (newItem == "" || newItem == " ") {} 

        else {work.push(newItem);}

        res.redirect("/work");
    } 

    else {

        if (newItem == "" || newItem == " ") {}

        else {items.push(newItem);}

        res.redirect("/");
    }
});

app.get("/work", (req, res) => {

    res.render("list", { listTitle: "work", listitemejs: work });
    res.redirect("/work");
});


app.get("/about", (req, res) => {
    res.render('about')

});






app.listen(3000, () => {

    console.log("listning on port 3000");


});

