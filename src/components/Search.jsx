import { useState } from "react";



const Search = (props) => {

const {handleSearch = Function.type} = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSearch({search});
        }
    }

    const handleFilter = (event) => {
        setType(event.target.dataset.type );
        handleSearch(search, event.target.dataset.type );
    };

        return (
            <div className="row">
                <div className="input-field">
                    <input
                        className="validate"
                        placeholder="search"
                        type="search"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value )
                        }
                        onKeyDown={handleKey}
                    />
                    <button 
                        className='btn search-btn' 
                        onClick={() => handleSearch(search, type)}>Search</button>
                    <div>
                        <label>
                            <input 
                                className="with-gap" 
                                name="type" 
                                type="radio" 
                                onChange={handleFilter} 
                                data-type='all'
                                checked={type === 'all'}/>
                            <span>All</span>
                        </label>
                        <label>
                            <input 
                                className="with-gap" 
                                name="type" type="radio" 
                                onChange={handleFilter} 
                                data-type='movie'
                                checked={type === 'movie'}/>
                            <span>Movies only</span>
                        </label>
                        <label>
                            <input 
                                className="with-gap" 
                                name="type" 
                                type="radio" 
                                onChange={handleFilter} 
                                data-type='series'
                                checked={type === 'series'}/>
                            <span>Series only</span>
                        </label>
                    </div>
                </div>
            </div>
        )
}

export { Search };
