import { useState } from 'react';
import '../../style.css'

function SearchBar() {
    const [pokemon, setPokemon] = useState('');
    const editPokemon = (e: React.ChangeEvent<HTMLInputElement>) => setPokemon((e.target.value));

    return (
        <div>
            <div className="searchBar">
                <input placeholder="Enter a Pokemon" type="text" onChange={editPokemon}/>
                <img className="searchIcon"/>
            </div>
        </div>
        

    )
}

export default SearchBar;