
import { useEffect, useState } from 'react';
import './type.css'

function Type({ children }: { children: React.ReactNode }) {
    const typeName = String(children)
    const [typeData, setTypeData] = useState();
    
    useEffect(() => {
        let lowerCaseType = typeName.toLowerCase();
        fetch(`https://pokeapi.co/api/v2/type/${lowerCaseType}`)
        .then(res => res.json())
        .then(data => {
            setTypeData(data.sprites['generation-viii']['sword-shield'].name_icon);
        })
    })
    return(
        <div className={`type ${typeName}`}>
            <div className="imageContainer">
                <img 
                    src={`/assets/pokemon_icons/Pokemon_Type_Icon_${typeName}.svg`}
                    alt={`${typeName} type icon`}
                    className="typeImage"
                />
            </div>
            <img 
                src={typeData}
                className="typeFooter"
            />
        </div>
    )
}

export default Type;