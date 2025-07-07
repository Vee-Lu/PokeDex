import './pokedex.css'
import Header from '../Header'
import Footer from '../Footer'

export interface Stat {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
}

export interface Move {

}

export interface PokemonProps {
    sprite: string;
    audio: string;
    description: string;
    number: number;
    stat: Stat;
}


function Sprite({ sprite }: Pick<PokemonProps, 'sprite'>) {
    return (
        <div>
            <img className='sprite' src={sprite}/>
        </div>
    )
}

function Audio({audio}: Pick<PokemonProps, 'audio'>) {
    return (
        <div>
            <audio controls>
                <source src={audio} type="audio/ogg"/>
            </audio>
        </div>
    )
}

function Description({description}: Pick<PokemonProps, 'description'>) {
    return (
        <div>
            <table>
                <tr>
                    <th>National Pokedex Number</th>
                </tr>
        
                <tr>
                    <th>Height</th>
                </tr>

                <tr>
                    <th>Weight</th>
                </tr>

                <tr>
                    <th>Species</th>
                </tr>

                <tr>
                    <th>Description</th>
                    <td>{description}</td>
                </tr>

            </table>
        </div>
    )
}

function Abilities() {

}

function Pokemon({sprite, audio, description}: PokemonProps) {
    return (
        <div className='pokemon'>
            <div>
                <Sprite sprite={sprite}/>
                <Audio audio={audio}/>
            </div>
            <Description description={description}/>
        </div>
    )
}
export default Pokemon