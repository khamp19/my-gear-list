const mongoose = require('mongoose');

const GearItemSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: true,
  },
  description: {
    type: 'string',
    required: true,
  }
});

module.exports = mongoose.model('Item', GearItemSchema);
