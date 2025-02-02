const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect =(callback) => {

MongoClient.connect(
    'mongodb+srv://pramish:password%40psp123@cluster0.0g070.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0'
)
.then(client => {
  console.log('Yo Man you are doing great');
  _db = client.db();
    callback(client);
})
.catch(err => {
  console.log(err);
  throw err;
});
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;