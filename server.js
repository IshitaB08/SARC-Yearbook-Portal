const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
const User = require('./models/user')
const passport = require('passport')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const port = 3000;

mongoose.connect(process.env.DATABASEURL, {
  useNewUrlParser : true,
  useCreateIndex : true
}).then (() => {
  console.log('connectde')
}).catch(err => {
  console.log('eroor', err.message);
})

console.log(process.env.DATABASEURL)

app.use(cookieSession({
  maxAge : 24 * 60 * 60 * 1000,
  keys : [keys.session.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())


app.use(express.static('public'));
app.listen(port, () => console.log('Listening at port ' + port));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const authRoutes = require('./routes/auth-routes')
const getRoutes = require('./routes/get-routes')
const postRoutes = require('./routes/post-routes')
app.use('/auth', authRoutes)
app.use('/', getRoutes)
app.use('/', postRoutes)

// 'mongodb+srv://ishita:3Xe@!zaNV!MYdw6@cluster0-7yiz5.mongodb.net/sarc-portal?retryWrites=true&w=majority'