const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
   title: String,
   director: String,
   stars: [String],
   image: String,
   description: String,
   showTimes: [String],
});

const MovieModel = mongoose.model("movies", movieSchema);

module.exports = MovieModel;