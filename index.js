import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

const itemList = [];
const workItemList = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    const url = req.url;
    res.render("index.ejs", {activeButton: activeButton, currentUrl: url, itemList });
});

app.get("/work", (req, res) => {
    const url = req.url;
    res.render("index.ejs", {activeButton: activeButton, currentUrl: url, workItemList});
});


app.post("/", (req, res) => {
    const newItem = req.body.newItem.trim();
    itemList.push(newItem);
    res.redirect("/"); 
});

app.post("/work", (req, res) => {
    const newItem = req.body.newItem.trim();
    workItemList.push(newItem);
    res.redirect("/work");
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


function activeButton(currentUrl, targetUrl) {
    if (currentUrl ===  targetUrl) {
        return 'active';
    } else {
        return '';
    }
}