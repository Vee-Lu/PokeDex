import type { ChangeEvent } from 'react';
import './pokedex.css'

interface SearchBarProps {
  pokemonName: string;
  editPokemon: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({pokemonName, editPokemon}: SearchBarProps ) {

    return (
        <div>
            <div className="searchBar">
                <input placeholder="Enter a Pokemon" value={pokemonName} type="text" onChange={editPokemon}/>
                <img className="searchIcon" src='../assets/search_icon.webp'/>
            </div>
        </div>
        

    )
}

export default SearchBar;