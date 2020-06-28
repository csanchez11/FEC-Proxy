const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const router = require('./router.js');


const port = 3000

const app = express()


app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.static(path.join(__dirname, '../public')))

app.use('/', router);



app.listen(port, () => console.log(`App listening at http://localhost:${port}`))

