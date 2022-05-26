const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  brand: {
    type: String,
    unique: true,
    required: true
  },
  sector: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});


const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;