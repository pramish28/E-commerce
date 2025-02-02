const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect =(callback) => {

MongoClient.connect(
    'mongodb+srv://pramish:password%40psp123@cluster0.0g070.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0'
)
.then(client => {
  console.log('Connected!');
    callback(client);
})
.catch(err => {
  console.log(err);
 // throw err;
});
};

module.exports = mongoConnect;