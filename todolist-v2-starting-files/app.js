//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-ratanon:Tap45517!@cluster0-n0ayn.mongodb.net/todolistDB",{useNewUrlParser: true,useUnifiedTopology:true});

const itemSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true,"No Input!"]
  }
});

const Item = mongoose.model("Item",itemSchema);

const item1 = new Item ({
  name: "Hey, welcome to the to-do-list!"
});

const item2 = new Item ({
  name: "Hit add + to use the list"
});

const item3 = new Item ({
  name: "Use <--- to delete a list"
});

const defaultItems = [item1,item2,item3];

const listSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true,"No Input!"]
  },
  items: [itemSchema]
});

const List = mongoose.model("List",listSchema);

app.get("/", function(req, res) {

  Item.find({},function(err, foundItems){
    if(foundItems.length === 0){
      Item.insertMany(defaultItems,function(err){
        if(err){
          console.log(err);
        } else{
          console.log("Item Added Successfully");
        }
      });
      res.redirect("/");
    } else{
    res.render("list", {listTitle: "Today", newListItems: foundItems});
    }
  });

});

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const listName = req.body.list; 

  const item = new Item({
    name: itemName
  });

  if(listName==="Today"){
    item.save();
    res.redirect("/");
  } else{
    List.findOne({name: listName},function(err,foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" +listName);
    })
  }

});

app.post("/delete", function(req,res){
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today"){
    Item.findByIdAndRemove(checkedItemId,function(err){
      if(err){
        console.log(err);
      } else{
        console.log("Item removed successfully!");
        res.redirect("/");
      }
    })
  } else{
    List.findOneAndUpdate({name:listName},{$pull: {items: {_id:checkedItemId}}},function(err, foundList){
      if (!err){
        res.redirect("/" + listName);
      }
    })
  }
  
})

app.get("/:customListName",function(req,res){
  const requestedListName = _.capitalize(req.params.customListName);

  List.findOne({name:requestedListName},function(err,foundList){
    if (!err){
      if(!foundList){
        const list = new List({
          name: requestedListName,
          items: defaultItems
        });
        list.save();
        res.redirect("/"+requestedListName);
      } 
      else{
        res.render("list", {listTitle: foundList.name, newListItems: foundList.items});
      }
    }
  });  
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
