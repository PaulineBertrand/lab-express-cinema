const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const MovieModel = require("./../models/Movie.model.js");

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index', { myCSS: "homepage.css", title: "Homepage - Ironhack cinema" });
});

router.get('/movies', async (req, res, next) => {
    try {
        const listOfMovies = await MovieModel.find();
        res.render('movies.hbs', {list: listOfMovies, myCSS: "movie-list.css", title: "Movie list - Ironhacker cinema"})
    } catch (err) {console.error(err)}

}
)

router.get('/movie/:id', async (req, res) => {
    try {
        const movie = await MovieModel.findById(req.params.id);
        res.render('movieDetails', { movie, myCSS: "movie-details.css" });
    } catch (err) {console.error(err)}
})


module.exports = router;
