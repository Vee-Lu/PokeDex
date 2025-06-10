import { useEffect, useState } from "react";
import SearchBar from './Searchbar'
import Pokemon from './Pokemon'; 
import type { PokemonProps } from './Pokemon';

function Pokedex() {
    const [pokemonName, setName] = useState<String>("eevee");
    const [id, setID]  = useState<number>(133);
    const [pokemon, setPokemon] = useState<PokemonProps>({
        sprite: '',
        audio: '',
        description: ''
    });

    //Fetch JSON data for specified Pokemon
    useEffect(() => {
        Promise.all([
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`),
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`),
        ])
        .then(async ([res1, res2]) => {
            const pokemonData = await res1.json();
            const speciesData = await res2.json();

            console.log(pokemonData);
            console.log(speciesData);

            setPokemon({
                sprite: pokemonData.sprites.front_default,
                audio: pokemonData.cries.latest,
                description: speciesData.flavor_text_entries[0].flavor_text
            });
        })
        .catch(error => {
            console.error("Error fetching API request", error);
            setPokemon({
                sprite: '',
                audio: '',
                description: 'Error loading Pokémon data.'
            });
        })
     
    }, [pokemonName])

    /*
     const eeveeProps: PokemonProps = {
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
        audio: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/133.ogg',
        description: pokemon[0].flavor_text_entries[0].flavor_text
    };
    */

    return (
        <div>
            {Object.values(pokemon).every(value => value) ?(
                <>
                    <Pokemon {...pokemon}/>
                </>
            ) : (
                <p>Loading...</p>
            )}
            <SearchBar/>
            <p>Font thanks to <a href="https://www.onlinewebfonts.com/download/073a3b73a63a87e100f6bb8f003fc0d3">Ben Blom</a></p>
            
        </div>
    )
}
export default Pokedex
