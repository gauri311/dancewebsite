db.items.updateOne({name:"moto 30s"}, {$set:{price:2}})
db.items.updateMany({name:"moto 30s"}, {$set:{price:3,rating:1}})
db.items.find()
// { "_id" : ObjectId("5f029186297c8a0663919422"), "name" : "moto 30s", "price" : 3, "rating" : 1, "qty" : 133, "sold" : 598 }
// { "_id" : ObjectId("5f029186297c8a0663919423"), "name" : "realme 30s", "price" : 129000, "rating" : 2.5, "qty" : 633 }
// { "_id" : ObjectId("5f0296c5297c8a0663919424"), "name" : "moto 30s", "price" : 3, "rating" : 1, "qty" : 135, "sold" : 58 }
// >
