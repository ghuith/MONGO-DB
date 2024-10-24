db.contactlist.insertMany([
    { nom: "Ben", prenom: "Moris", email: "ben@gmail.com", age: 26 },
    { nom: "Kefi", prenom: "Seif", email: "kefi@gmail.com", age: 15 },
    { nom: "Emilie", prenom: "brouge", email: "emilie.b@gmail.com", age: 40 },
    { nom: "Alex", prenom: "brown", age: 4 },
    { nom: "Denzel", prenom: "Washington", age: 3 }
  ]);
   
  

  db.contactlist.find().pretty();



  db.contactlist.findOne({ _id: ObjectId("...") });



  db.contactlist.find({ age: { $gt: 18 } }).pretty();

  db.contactlist.find({ age: { $gt: 18 }, nom: /ah/ }).pretty();


  db.contactlist.updateOne(
    { nom: "Kefi", prenom: "Seif" },
    { $set: { prenom: "Anis" } }
  );
  



  db.contactlist.deleteMany({ age: { $lt: 5 } });


  db.contactlist.find().pretty();

