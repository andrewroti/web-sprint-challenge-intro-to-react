// Write your Character component here
import React from 'react';



const Character = (props)=>{

    const {charName, gender, eyeColor, hairColor, birthYear} = props;

    return(
    <div>
        <h3>Click My Name To Learn More: {charName}</h3>
        <div className='info_container'>
            <ul>
                <li>Name: {charName}</li>
                <li>Gender: {gender}</li>
                <li>Birth Year: {birthYear}</li>
                <li>Eye Color: {eyeColor}</li>
                <li>Hair Color: {hairColor}</li>
            </ul>
        </div>
    </div>
    );
} 

export default Character;