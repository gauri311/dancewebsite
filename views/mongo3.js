// use harrycart
// deleting items from the mongo databse
db.items.deleteOne({price:22000})
// deleteone will delete the matching entry and will delete the first entry in case of multi document match
db.items.deleteMany({rating:2.5})