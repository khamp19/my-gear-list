const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Item = require('./gearItem');

mongoose.Promise = global.Promise;
const connect = mongoose.connect(
  'mongodb://localhost/gear',
  { useMongoClient: true }
);

const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.sendUserError = function (err) {
    const userError = typeof err === 'string' ? {error: err} : err;
    this.status(STATUS_USER_ERROR);
    this.json(userError);
  };
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.post('/gear', (req, res) => {
  const { name, description } = req.body;
  if(!name || !description) {
    res.sendUserError('include item name and description');
    return;
  }
  const newItem = new Item(req.body);
  newItem.save()
  .then((newItem) => {
    Item.find({})
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      res.json(err);
      return;
    });
  })
  .catch((err) => {
    res.json(err);
    return done();
  })
});

app.get('/gear', (req, res) => {
  Item.find({})
  .then((items) => {
    res.json(items);
  })
  .catch((err) => {
    res.json(err);
    return;
  });
});

app.get('/gear/:id', (req, res) => {
  const id = req.params.id;
  Item.findById(req.params.id, (err, item) => {
    if(err) {
      res.send(err);
      return;
    }
    if(!id) {
      res.sendUserError('Item not found');
      return;
    }
    res.json(item);
  });
});

app.put('/gear/:id', (req, res) => {
  const id = req.params.id;
  Item.findById(req.params.id, (err, item) => {
    if(err) {
      res.send(err);
      return;
    }
    if(!id) {
      res.sendUserError('Item not found');
      return;
    }
    item.name = req.body.name || item.name;
    item.description = req.body.description || item.description;
    item.save((err, item) => {
      if(err) return res.send(err);
      res.send(item);
    });
  });
});

app.delete('/gear/:id', (req, res) => {
  const id = req.params.id;
  if(!id) {
    res.sendUserError('Item not found');
    return;
  }
  Item.findByIdAndRemove(id)
  .then((id) => {
    Item.find({})
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      res.json(err);
      return;
    });
  })
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
