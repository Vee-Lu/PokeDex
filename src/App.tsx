import React, { useState } from 'react'
import './styles.css'
import Pokedex from './components/Pokedex/Pokedex'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    const headerText = ["Trainer Dex", "Types", "Users"];
    const footerText = [<p>Font thanks to <a href="https://www.onlinewebfonts.com/download/073a3b73a63a87e100f6bb8f003fc0d3">Ben Blom</a></p>];
    return (
        <div className='bodyContainer'>
            <Header/>
            <div className="appContainer">
                <Pokedex/>
            </div>
            <Footer>Font thanks to Ben Blom</Footer>
        </div>
    )

}

export default App