import { useState, useEffect } from 'react';

import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            }
            )
            
    }, [])

    const handleSearch = (str, type = 'all') => {
        // fetch(`http://www.omdbapi.com/?apikey=e8c023ca&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        setLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            }
            )
    }
        
        return (
            <main className="container content">
                <Search handleSearch={handleSearch}/>
               {
                   loading ? <Preloader/> : <Movies movies={movies}/> 
               }
            </main>

        )
}

export { Main };