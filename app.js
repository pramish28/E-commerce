const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
 User.findByPk('679fb46396b91ff71a7ba43a')
   .then(user => {
     req.user = user;
     next();
   })
   .catch(err => console.log(err));
 
});

 app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
 
mongoConnect(() => {

app.listen(3000);
});
 