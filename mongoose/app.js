const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/fruitsDB',{useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "No Fruit Name!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty solid for a fruit!"
});



// const Kiwi = new Fruit ({
//   name: "Kiwi",
//   rating: 10,
//   review: "BEST FRUIT EVA"
// });

// const Orange = new Fruit({
//   name: "Orange",
//   rating: 4,
//   review: "Meh!"
// });

// const Banana = new Fruit ({
//   name: "Banana",
//   rating: 3,
//   review: "Weird"
// });

// Fruit.insertMany([Kiwi,Orange,Banana], function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

//fruit.save()

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person",personSchema);

const grapes = new Fruit({
  name: "Grapes",
  score: 10,
  review: "Godly Fruit"
});

grapes.save();

const person = new Person ({
  name: "John",
  age: 37,
  favouriteFruit: grapes
});

person.save()

Fruit.find(function(err,fruits){
  if (err){
    console.log(err);
  } else{
    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
})

// Fruit.updateOne({_id:"5eb51b6472087a12cc071179"},{name:"Peach",review:"Peach is THE BEST!"},function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Update Success!")
//   }
// });

// Fruit.deleteOne({_id:"5eb51b6472087a12cc071179"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Delete Success!");
//   }
// });

// Person.deleteOne({name: "John"},function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Delete Success!");
//   }
// });

  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, fruits) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(fruits)
      callback(fruits);
    });
  }