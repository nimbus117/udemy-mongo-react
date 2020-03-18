const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const mongoDbUrl =
  'mongodb+srv://User0:Password0@cluster0-1vluo.mongodb.net/shop?retryWrites=true';

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('DB already initialised');
    return callback(null, _db);
  }

  MongoClient.connect(mongoDbUrl)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('DB not initialised');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};
