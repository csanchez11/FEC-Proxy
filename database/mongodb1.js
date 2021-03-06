var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/JACDSug', {useUnifiedTopology: true, useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


const suggestionsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  productname: String,
  productprice: Number,
  productimgurl: String,
  productid: String,
  producturl: String,
  producttype: {
    collection: String, //ABC, commision, metal vent tech, city swat, surge
    category: String, // clothes, accessories
    gender: String, //women, mens, girls
    subcategory: String //joggers, shorts, bags, yoga mats, underswear, swimsuit, swim trunks
  },
  activitytype: String, //training, yoga, running, on the move, gym, tennis, golf, thermal
  bestseller: Boolean //yes or no
});





module.exports = mongoose.model('Suggestionsdata', suggestionsSchema);