const router = require('express').Router();
const controller = require('./controller.js');
var mongoose = require('mongoose');

const Suggestionsdata = require('../database/mongodb1.js')

router.get('/api/products', (req, res) => {
  Suggestionsdata.find()
  .exec()
  .then(doc => {
    res.send(doc)
    res.status(200).json(doc);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      err
    });
  })
});
router.post('/api/search', (req, res) => {
  Suggestionsdata.find({"productname": { $regex: req.body.productname, $options: 'i'}})
  .exec()
  .then(doc => {
    //console.log(doc);
    res.send(doc)
    res.status(200).json(doc);
  })
  .catch(err => {
    console.log(err.errmsg);
    res.status(500).json({
      err
    });
  })
});





// Main Product Component
router
  .route('/cart')
  // gets subtotal of cart
  .get(controller.getCartInfo)
  // adds a product to cart
  .post(controller.addToCart)
  // deletes entire cart
  .delete(controller.deleteCart);

router
  .route('/:id')
  // gets one product info
  .get(controller.getOne);

// Product Details Component
router
  .route('/products/:id')
  .get(controller.getProduct);



// Reviews Component

router.route('/reviews').get(controller.getAll);

router.route('/reviews/searchQuery/:id').get(controller.searchQuery);

router.route('/reviews/:id')
.get(controller.getOneRev)

router.route('/reviewspost/:id')
.post(controller.postReview);

router.route('/reviews/rating/:id').get(controller.getRatings);



module.exports = router;
