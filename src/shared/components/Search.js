/*import React, { Fragment, useEffect, useState } from 'react'
import './Search.scss'
import CryptoList from './CryptoList';

const Search = props =>{
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
    setSearchTerm(event.target.value);
    };

    useEffect(() => {
        if (searchTerm) {
            const results = props.info.filter(crypto =>
                crypto.product_ids.toLowerCase().includes(searchTerm)
                );
            setSearchResults(results);
        }
        }, [searchTerm]);

    return(
        <Fragment>
            <form className="search">
            <input type="text" 
            className="search__input" 
            placeholder="Student Search"
            value={searchTerm}
            onChange={handleChange}
            />
            <button className="search__button">
                <svg className="search__icon">
                    <use xlinkHref="img/sprite.svg#icon-magnifying-glass"/>
                </svg>
            </button>
            <CryptoList/>
            </form>
        </Fragment>
        );
    };

export default Search;


*/