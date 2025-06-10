import {Card} from 'react-bootstrap';
import '../../style.css'
export interface PokemonProps {
  sprite: string;
  audio: string;
  description: string;
}


function Sprite({ sprite }: Pick<PokemonProps, 'sprite'>) {
    return (
        <div>
            <img src={sprite}/>
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
        <div className='card'>
            {description}
        </div>
    )
}


function Pokemon({sprite, audio, description}: PokemonProps) {
    return (
        <div className='card'>
            <Sprite sprite={sprite}/>
            <Audio audio={audio}/>
            <Description description={description}/>
        </div>
    )
}
export default Pokemon