const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');

//const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
// User.findByPk('679fb46396b91ff71a7ba43a')
//    .then(user => {
//      req.user = new User(user.name, user.email, user.cart, user._id);
//      next();
//    })
//    .catch(err => console.log(err));
 
// });

 app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
 
mongoose.connect('mongodb+srv://pramish:password%40psp123@cluster0.0g070.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0')
.then(
  result => {
    app.listen(3000);
  }).catch(err => {
    console.log(err);
  });
 