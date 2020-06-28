var mongoose = require('mongoose');

var ReviewsSchema = new mongoose.Schema({
  reviews: [
    {
      rating: Number,
      title: String,
      review: String,
      recommendation: Boolean,
      nickname: String,
      email: String,
      age: {
        noAge: Boolean,
        under18: Boolean,
        between1824: Boolean,
        between2534: Boolean,
        between3544: Boolean,
        between4554: Boolean,
        between5565: Boolean,
        over65: Boolean
      },
      bodyType: {
        athletic: Boolean,
        curvy: Boolean,
        lean: Boolean,
        muscular: Boolean,
        petite: Boolean,
        slim: Boolean,
        solid: Boolean
      },
      location: String,
      wearTo: {
        practiceYoga: Boolean,
        dance: Boolean,
        cycle: Boolean,
        run: Boolean,
        wearCasually: Boolean
      },
      likes: String,
      dislikes: String,
      created_at: {
        type: Date,
        default: new Date()
      }
    }
  ],
  image: String,
  productTitle: String,
  productID: Number
});

module.exports = ReviewsSchema;
