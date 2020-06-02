import React from 'react';
import HomePage from './Components/HomePage';
import CategoryFilm from './Components/CategoryFilm';
import MovieWatchSpace from './Components/MovieWatchSpace';
import NotFound from './Components/NotFound';
const routes = [
    {
        path: '/',
        exact: true,
        main : ()=> <HomePage />
    },
    {
        path: '/category-films',
        exact: false,
        main : ()=> <CategoryFilm />
    },
    {
        path: '/movie-watch-space',
        exact: false,
        main : ()=> <MovieWatchSpace />
    },
    {
        path: '',
        exact: false,
        main : ()=> <NotFound />
    },
]

export default routes;