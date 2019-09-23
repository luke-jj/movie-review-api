const Joi = require('joi');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

const Genre = mongoose.model('genres', schema);

module.exports.Genre = Genre;
module.exports.genreSchema = schema;
module.exports.validate = validateGenre;

function validateGenre(body) {
  const schema = {
    name: Joi.string().min(5).max(50).required()
  };

  return Joi.validate(body, schema);
}
