// Write your Character component here
import React from 'react';



const Character = (props)=>{

    const {chars} = props;

    return(
    <div>
        <h3>Click My Name To Learn More: {chars.name}</h3>
        <div className='info_container'>
            <ul>
                <li>Name: {chars.name}</li>
                <li>Gender: {chars.gender}</li>
                <li>Birth Year: {chars.birth_year}</li>
                <li>Eye Color: {chars.eye_color}</li>
                <li>Hair Color: {chars.hair_color}</li>
            </ul>
        </div>
    </div>
    );
} 

export default Character;