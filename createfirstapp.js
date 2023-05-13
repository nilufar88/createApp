"use strict"

const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('What is your last watched film?', '');
      b = prompt('How would you evaluate it', '');
      c = prompt('What is your last watched film?', '');
      d = prompt('How would you evaluate it', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);