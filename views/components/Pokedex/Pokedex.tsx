import { useEffect, useState } from "react";
import Pokemon from './Pokemon'; 
import type { PokemonProps, Stat } from './Pokemon';

import SearchBar from './Searchbar'
import Header from '../Header'
import Footer from '../Footer'

import {loadPokemon} from '../../utils/loadPokemon'
import './pokedex.css'

//Default Stats
export const defaultStat: Stat = {
    hp: 0,
    attack: 0,
    defense: 0,
    special_attack: 0,
    special_defense: 0,
    speed: 0
};

//Default Pokemon
export const defaultPokemon: PokemonProps = {
    number: 0,
    sprite: '',
    audio: '',

    species: '',
    types: [],
    height: 0,
    weight: 0,
    description: '',
    stat: defaultStat
};

function Pokedex() {
    
    const [pokemonName, setName] = useState<string>("eevee");
    const [pokemon, setPokemon] = useState<PokemonProps>(defaultPokemon);
    const [randPokemon, setRandPokemon] = useState(() =>
        Math.floor(Math.random() * 1025) + 1
    );

    function editPokemon(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    /*Function that loads pokemon data by fetching JSON data for specified Pokemon*/
    /*
    function loadPokemon(pokemon: string | number) {
        Promise.all([
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`),
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`),
        ])
        .then(async([res1,res2]) => {
            const pokemonData = await res1.json();
            const speciesData = await res2.json();

            const flavorTexts = speciesData.flavor_text_entries.filter(
                (text:
                    {
                        language: {name: string}
                    }
                ) => text.language.name === 'en'
            );

            setPokemon({
            sprite: pokemonData.sprites.front_default,
            audio: pokemonData.cries.latest,
            description: flavorTexts[0].flavor_text,
            number: speciesData.pokedex_numbers[0].entry_number,
            stat: {
                hp: pokemonData.stats[0].base_stat,
                attack: pokemonData.stats[1].base_stat,
                defense: pokemonData.stats[2].base_stat,
                special_attack: pokemonData.stats[3].base_stat,
                special_defense: pokemonData.stats[4].base_stat,
                speed: pokemonData.stats[5].base_stat,
            }
        });
        })
    }
    */
    


    useEffect(() => {
        loadPokemon(randPokemon).then(setPokemon);
    }, [pokemonName]);


    return (
        <div className="pokedexContainer">
            <Header/>
                <div className="pokemonContainer">
                    <SearchBar pokemonName={pokemonName} editPokemon={editPokemon}/>
                    {Object.values(pokemon).every(value => value) ?
                    (<> 
                        <Pokemon {...pokemon}/> 
                    </>) 
                    : 
                    (<p>
                        Loading...
                    </p>)}
                </div>
            <Footer>Font thanks to Ben Blom</Footer>
        </div>
    )
}
export default Pokedex
