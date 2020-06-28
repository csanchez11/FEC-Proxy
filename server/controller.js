const helper = require('../database/dbHelpers.js');
const database = require('../database/mongoHelpers.js');

const controller = {
// Main Comp Controller
  getOne: (req, res) => {
    let {id} = req.params;
    helper.getOne(id, (err, results) => {
      err ? res.status(404).send(err) : res.status(200).json(results);
    });
  },
  getCartInfo: (req, res) => {
    helper.getCartInfo((err, results) => {
      err ? res.status(404).send(err) : res.status(200).json(results);
    });
  },
  addToCart: (req, res) => {
    let {price} = req.body;
    helper.addToCart(price, (err, results) => {
      err ? res.status(404).send('Unable to add to cart') : res.status(200).send('Product added to cart.');
    });

  },
  deleteCart: (req, res) => {
    helper.deleteCart((err, results) => {
      err ? res.status(404).send('Unable to clear cart') : res.status(200).send('Cart has been cleared');
    });
  },
// Product Details Controller
  getProduct: (req, res) => {

    helper.getProduct(req.params, (err, results) => {
      if (err) {console.error(err)}
      else {
        res.status(200).send(results[0])
      }
    })
  },
// Reviews Controller
  getAll: (req, res) => {
    database
      .getAll()
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err));
  },
  getOneRev: (req, res) => {
    let { id } = req.params;
    database
      .getOne(id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => res.status(400).send(err));
  },
  searchQuery: (req, res) => {
    console.log('reqQuery', req.query);
    let obj = {
      image: req.params.id,
      queryStr: req.query.query
    };
    database
      .searchQuery(obj)
      .then((data) => {
        let shortenData;
        if (data.length > 16) {
          shortenData = data.slice(0, 16);
          res.status(200).send(shortenData);
        }
        res.status(200).send(data);
      })
      .catch((err) => res.status(400).send(err));
  },
  getRatings: (req, res) => {
    let id = req.params.id;
    database
      .getRatings(id)
      .then((data) => {
        let reviewRating = data.map((review) => {
          return review.reviews;
        });
        res.status(200).send(reviewRating);
      })
      .catch((err) => res.status(400).send('error getting ratings'));
  },
  postReview: (req, res) => {
    console.log('REQ BODY', req.body)
    console.log('REQPARAMS', req.params.id)
    let obj = {
      id: req.params.id,
      rating: req.body.rating,
      title: req.body.title,
      review: req.body.review,
      recommendation: req.body.recommendation,
      nickname: req.body.nickname,
      email: req.body.email,
      age: req.body.age,
      bodyType: req.body.bodyType,
      location: req.body.location,
      wearTo: req.body.wearTo,
      likes: req.body.likes,
      dislikes: req.body.dislikes
    };
    console.log('obj in controller', obj)
    database
      .postReview(obj)
      .then(() => {
        res.status(200).send('posted review');
      })
      .catch(() => {
        res.status(400).send('could not post review');
      });
  }

};

module.exports = controller;