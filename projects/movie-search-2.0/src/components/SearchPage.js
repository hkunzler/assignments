import React from 'react';
import SearchForm from './SearchForm'
import { withMovies } from '../context/MovieProvider.js'



const SearchPage = () => {
    return (
        <div>
            <SearchForm />
        </div>
    );
};

export default withMovies(SearchPage);