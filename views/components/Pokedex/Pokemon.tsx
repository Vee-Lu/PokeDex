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

export interface Type {
    name: string;
    image: string;
}

export interface PokemonProps {
    number: number;
    sprite: string;
    audio: string;

    species: string;
    types: Type[];

    height: number;
    weight: number;
    description: string;
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

function Description(props: Pick<PokemonProps, 'description' | 'number' | 'species' | 'height' | 'weight' | 'types'>) {
    const { description, number, species, height, weight, types } = props;
    return (
        <div className="description">
            <table>
                <tbody>
                    <tr>
                        <th>National Pokedex Number</th>
                        <td>{number}</td>
                    </tr>
                    <tr>
                        <th>Type</th>
                        <td>
                        {types.map((type) => (
                                <img className="typeTD"
                                    src={type.image}
                                    alt={`${type.name} type icon`}
                                />
                        ))}
                        </td>
                    </tr>
                    <tr>
                        <th>Height</th>
                        <td>{height/10} meters</td>
                    </tr>

                    <tr>
                        <th>Weight</th>
                        <td>{weight/10} kilograms</td>
                    </tr>

                    <tr>
                        <th>Species</th>
                        <td>{species}</td>
                    </tr>

                    <tr>
                        <th>Description</th>
                        <td>{description}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function Abilities() {

}

function Pokemon({number, sprite, audio, description, species, height, weight, types}: PokemonProps) {
    return (
        <div className='pokemon'>
            <div>
                <Sprite sprite={sprite}/>
                <Audio audio={audio}/>
            </div>
            <Description
                description={description} 
                number={number} 
                species={species}
                types={types}
                height={height}
                weight={weight}
            />
        </div>
    )
}
export default Pokemon