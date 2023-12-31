const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");
const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});

app.get("/", function (req, res) {
 
  const day = date.getDate();

  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {

  const item = req.body.newItem;

if (req.body.list === "Work") {
  workItems.push(item);
  res.redirect("/work");
} else {
  items.push(item);
  res.redirect("/");
}
 
});

app.get("/work", function(req,res){
  res.render("list",{listTitle: "Work List", newListItems: workItems});
})

app.post("/work", function(req,res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

// const express = require("express");
// const bodyParser = require("body-parser");
// const date = require(__dirname + "/date.js"); // Ensure date.js exports a function
// const mongoose = require("mongoose");
// const app = express();

// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

// mongoose.connect("mongodb://localhost:27017/todolistDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true // Add this for avoiding deprecation warning
// });

// // Define MongoDB schema and model
// const itemSchema = {
//   name: String
// };
// const Item = mongoose.model("Item", itemSchema);

// // Initialize 'items' and 'workItems' arrays
// const items = [];
// const workItems = [];

// app.get("/", function (req, res) {
//   const day = date.getDate(); // Ensure date.js provides this function

//   // Fetch items from MongoDB and render the list
//   Item.find({}, function(err, foundItems) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.render("list", { listTitle: day, newListItems: foundItems });
//     }
//   });
// });

// app.post("/", function (req, res) {
//   const itemName = req.body.newItem;
//   const listName = req.body.list;

//   const newItem = new Item({
//     name: itemName
//   });

//   if (listName === "Work") {
//     workItems.push(newItem);
//     res.redirect("/work");
//   } else {
//     newItem.save(); // Save the new item to MongoDB
//     res.redirect("/");
//   }
// });

// app.get("/work", function(req, res){
//   res.render("list", { listTitle: "Work List", newListItems: workItems });
// });

// app.post("/work", function(req, res){
//   const item = req.body.newItem;
//   workItems.push(item);
//   res.redirect("/work");
// });

// app.listen(3000, function () {
//   console.log("Server started on port 3000");
// });
