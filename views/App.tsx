import  { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import Pokemon from './components/Pokedex/Pokemon';
import type { PokemonProps, Stat } from './components/Pokedex/Pokemon';
import { defaultPokemon } from './components/Pokedex/Pokedex'

import './styles.css'
import { loadPokemon } from './utils/loadPokemon';

function App() {
    const [dailyPokemon, setDailyPokemon] = useState<PokemonProps>(defaultPokemon);
    const [randPokemon, setRandPokemon] = useState(() =>
        Math.floor(Math.random() * 1025) + 1
    );

    useEffect(() => {
        loadPokemon(randPokemon).then(setDailyPokemon);
    })
    return (
        <div className='bodyContainer'>
            <Header/>
            <div className='appContainer'>
                <h1>Pokemon of the Day</h1>
                {Object.values(dailyPokemon).every(value => value) ?
                    (<> 
                        <Pokemon {...dailyPokemon}/> 
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

export default App