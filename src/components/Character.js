// Write your Character component here
import React from 'react';



const Character = (props)=>{

    const {char} = props;

    return(
    <div>
        <h3>{char.name}</h3>
        <div className='info_container'>
            <ul>
                <li>Name: {char.name}</li>
                <li>Gender: {char.gender}</li>
                <li>Birth Year: {char.birth_year}</li>
                <li>Eye Color: {char.eye_color}</li>
                <li>Hair Color:{char.hair_color}</li>
            </ul>
        </div>
    </div>
    );
} 

export default Character;