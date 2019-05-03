import React from 'react';
import './StarWars.css';


const Chars = props => {
    return (
        <div className="characterContainer">
            {props.data.map(character => {
                return (
                    <div className='characterCard'>
                    <h2 className="characterName">{character.breed}</h2>
                    </div> 
                )
            })}
                
        </div>
    )
}

export default Chars;