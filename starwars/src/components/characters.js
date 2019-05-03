import React from 'react';
import './StarWars.css';


const Chars = props => {
    return (
        <div className="characterContainer">
            {props.data.map(character => {
                return (
                    <div className='characterCard'>
                    <h1>{character.name}</h1>
                    <p>Gender: {character.gender}</p>
                    <p>Birth Year: {character.birth_year}</p>
                    <p>Height: {character.height}</p>
                    <p>Hair Color: {character.hair_color}</p>
                    <p>Eye Color: {character.eye_color}</p>
                    </div> 
                )
            })}
                
        </div>
    )
}

export default Chars;