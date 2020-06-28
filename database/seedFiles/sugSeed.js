
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/JACDSug', {useUnifiedTopology: true, useNewUrlParser: true});

//const Suggestionsdata = require('./database/index.js')

const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    // we're connected!
  });
  //db.suggestionsdatas.drop()

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

const Suggestionsdata = mongoose.model('Suggestionsdata', suggestionsSchema);

const prices = [
  '88',
  '98',
  '118',
  '128',
  '138',
  '148'
];

const mensjogger = [
  'Textured Tech Jogger',
  'ABC Jogger 30"',
  'ABC Jogger 30"' ,
  'City Sweat Jogger French Terry 29"',
  'Surge Jogger 29"',
  'ABC Jogger Shorter 28" Online Only',
  'ABC Jogger Tall 32" Online Only',
  'ABC Jogger Skinny Online Only',
  'ABC Jogger Canvas',
  'Surge Jogger Shorter 27" Online Only',
  'Surge Jogger Tall 31" Online Only',
  'City Sweat Jogger (Tall)',
  'In Mind Pant 30',
  'City Sweat Jogger French Terry 27" Shorter Online Only',
  'City Sweat Pant Slim',
  'At Ease Jogger',
  'ABC Jogger Light',
  'Intent Jogger Shorter Online Only',
  'Engineered Warmth Jogger',
  'License to Train Jogger 29"',
  'Intent Jogger 30"',
  'Refract Jogger 29" lululemon lab'
  ];

const malejoggerpic = [
  'LM5A04S_014033_1',
  'LM5A39S_032798_1',
  'LM5A60S_044354_1',
  'LM5A71S_1966_1',
  'LM5543S_034268_1',
  'LM5556S_032476_1',
  'LM5569S_1966_1',
  'LM5574S_032476_1',
  'LM5585T_0001_1',
  'LM5603S_0001_1',
  'LM5642S_038068_1',
  'LM5654S_028849_1',
  'LM5689S_032894_1',
  'LM5709S_032476_1',
  'LM5720T_026083_1',
  'LM5730S_0001_1',
  'LM5745S_0001_1',
  'LM5918S_032476_1',
  'LM5922T_030700_1',
  'LM5942S_032798_1',
  'LM5951S_031311_1'
];
const mensjoggercollection = [
  'ABC',
  'City Sweat',
  'Surge'
]

const mens_pants_subcategory = [
  'trousers',
  'joggers',
  'sweatpants',
  'tights',
];

//-------------------------------------------------------------------------------------------------------
const mensshirts = [
  '5 Year Basic Tee',
  '5 Year Basic Long Sleeve',
  '5 Year Basic V',
  'Metal Vent Tech Short Sleeve 2.0',
  'Metal Vent Tech Long Sleeve 2.0',
  'Metal Vent Breathe Short Sleeve',
  'Evolution Polo',
  'Down to the Wire Short Sleeve Shirt Online Only',
  'Metal Vent Tech Short Sleeve V 2.0 Online Only',
  '5 Year Basic Long Sleeve Henley',
  'Fast and Free Short Sleeve',
  'Fresh Form Short Sleeve',
  '5 Year Basic Tee',
  'Ashta Short Sleeve Tee lululemon lab',
  'Metal Vent Tech Short Sleeve V 2.0 Online Only',
  'Metal Vent Breathe Short Sleeve',
  'Fast and Free Short Sleeve',
  'Take The Moment Graphic Short Sleeve lululemon x Robert Geller',
  '5 Year Basic Long Sleeve',
  'Airing Easy Short Sleeve Buttondown',
  'Confluence Short Sleeve Tee lululemon lab',
  'Confluence Short Sleeve Crew lululemon lab',
  'Grid Light Short Sleeve Shirt',
  '5 Year Basic Long Sleeve Henley',
  'Down to the Wire Slim Fit Short Sleeve Online Only'
]
const mensshirtspics = [
  'LM3AP5S_013211_1',
  'LM3AP5S_026914_1',
  'LM3AP6S_0002_1',
  'LM3ATBS_1966_1',
  'LM3AV3S_044015_1',
  'LM3ATBS_035943_1',
  'LM3BHLS_035487_1',
  'LM3BCQS_0002_1',
  'LM3BETS_037032_1',
  'LM3BKCS_038888_1',
  'LM3BL4S_041982_1',
  'LM3BLES_0572_1',
  'LM3BLES_044318_1',
  'LM3BPQS_040694_1',
  'LM3BR5S_044315_1',
  'LM3BTOS_034812_1',
  'LM3BV1S_043757_1',
  'LM3BVQS_4780_1',
  'LM3BV7S_044039_1',
  'LM3BY8S_044528_1',
  'LM3CB3S_044611_1',
  'LM3CB5S_044223_1',
  'LM3CB8S_030210_1',
  'LM3CC6S_040239_1',
  'LM3CJLS_027976_1'
]

const mensshirtscollections = [
  'Commission',
  'Metal Vent Tech',
  'Surge',
  '5 Year Basics',
  'Fast and Free'
]

const mens_shirts_subcategory = [
  'Button Down Shirs',
  'Polo Shirts',
  'Short Sleeve Shirts',
  'Long Sleeve Shirts',
  'Tank Tops',
  'T-Shirts'
]
//-------------------------------------------------------------------------------------------------------
const womens_pants_subcategory = [
  'leggings',
  'capris',
  'sweatpants',
  'joggers',
  'trousers'
];
const womenspants = [
  'Align Pant 25" Diamond Dye',
  'Ebb to Street Tight Wash',
  'Wunder Train High-Rise Tight 25"',
  'Wunder Train High-Rise Crop 21"',
  'Align Crop 21" Diamond Dye',
  'Ready To Rulu Pant 29"',
  'Dance Studio Jogger',
  'On the Fly Jogger Luxtreme 25"',
  'LA Sweat Pant 26"',
  'Align Pant 28" Diamond Dye',
  'Align Jogger 28"',
  'Align Pant II 25"',
  'Align Pant 28"',
  'Align Crop21"',
  'Align Super-High Rise Pant 28"',
  'Wunder Under High-Rise Tight 28" Full-On Luxtreme',
  'Invigorate High-Rise Tight 25"',
  'Fast and Free Tight II 25" Non-Reflective Nulux',
  'Wunder Under High-Rise Tight 28" Luxtreme',
  'Invigorate High-Rise Tight 25" Diamond Dye',
  'Fast and Free Crop II 19" Non-Reflective',
  'Wunder Under High-Rise Tight 25" Full-On Luon',
  'Wunder Train High-Rise Tight 25" Diamond Dye',
  'In Movement Tight 25" Everlux',
];
const womenspantspic = [
  'LW5BPJS_0001_1',
  'LW5BSZS_042629_1',
  'LW5BT2S_034135_1',
  'LW5BTES_042628_1',
  'LW5BXOS_026950_1',
  'LW5BXQS_034115_1',
  'LW5BY3S_042629_1',
  'LW5CGPS_043753_1',
  'LW5CIFS_034135_1',
  'LW5COUS_043990_1',
  'LW5CQAS_034135_1',
  'LW5CQDS_043619_1',
  'LW5CQMS_019223_1',
  'LW5CQSS_045102_1',
  'LW5CQVS_043990_1',
  'LW5CR9S_043989_1',
  'LW5DADS_047310_1',
  'LW6AVIS_034135_1',
  'LW6BDES_043991_1',
  'LW6BFBS_042628_1',
];
const womenspantscollection = [
  'align',
  'Wunder Under',
  'Fast & Free',
  'On The Fly',
  'In Movement',
]



//-----------------------------------------Generates Mens Jogger Data--------------------------------
mensjogger.map(name => {
  name = new Suggestionsdata({
    _id: new mongoose.Types.ObjectId,
    productname: mensjogger[Math.floor(Math.random() * mensjogger.length)],
    productprice: prices[Math.floor(Math.random() * prices.length)],
    productid: malejoggerpic[Math.floor(Math.random() * malejoggerpic.length)],
    productimgurl: `https://luluproject.s3-us-west-1.amazonaws.com/male/joggers/${malejoggerpic[Math.floor(Math.random() * malejoggerpic.length)]}.webp`,
    producttype: {
      collection: mensjoggercollection[Math.floor(Math.random() * mensjoggercollection.length)],
      gender: 'mens',
      subcategory: 'joggers',
      category: 'clothes'
    },
  });
  name.save(function (err, fluffy) {
    if (err) return console.error(err);
    console.log('saved', name);
  });
  })

//-----------------------------------------Generates Womens Jogger Data--------------------------------
womenspants.map(name => {
  name = new Suggestionsdata({
    _id: new mongoose.Types.ObjectId,
    productname: womenspants[Math.floor(Math.random() * womenspants.length)],
    productprice: prices[Math.floor(Math.random() * prices.length)],
    productid: womenspantspic[Math.floor(Math.random() * womenspantspic.length)],
    productimgurl: `https://luluproject.s3-us-west-1.amazonaws.com/female/pants/${womenspantspic[Math.floor(Math.random() * womenspantspic.length)]}.webp`,
    producttype: {
      collection: womenspantscollection[Math.floor(Math.random() * womenspantscollection.length)],
      gender: 'womens',
      subcategory:womens_pants_subcategory[Math.floor(Math.random() * womens_pants_subcategory.length)],
      category: 'clothes'
    },
  });
  name.save(function (err, fluffy) {
    if (err) return console.error(err);
    console.log('saved', name);
  });
  })
//-----------------------------------------Generates Mens Shirts Data--------------------------------
mensshirts.map(name => {
  name = new Suggestionsdata({
    _id: new mongoose.Types.ObjectId,
    productname: mensshirts[Math.floor(Math.random() * mensshirts.length)],
    productprice: prices[Math.floor(Math.random() * prices.length)],
    productid: mensshirtspics[Math.floor(Math.random() * mensshirtspics.length)],
    productimgurl: `https://luluproject.s3-us-west-1.amazonaws.com/male/shirts/${mensshirtspics[Math.floor(Math.random() * mensshirtspics.length)]}.webp`,
    producttype: {
      collection: mensshirtscollections[Math.floor(Math.random() * mensshirtscollections.length)],
      gender: 'mens',
      subcategory:mens_shirts_subcategory[Math.floor(Math.random() * mens_shirts_subcategory.length)],
      category: 'clothes'
    },
  });
  name.save(function (err, fluffy) {
    if (err) return console.error(err);
    console.log('saved', name);
  });
  })
