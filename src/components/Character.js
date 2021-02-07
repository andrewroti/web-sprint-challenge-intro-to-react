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
                {/* <li>Gender: {gender}</li>
                <li>Birth Year: {birthYear}</li>
                <li>Eye Color: {eyeColor}</li>
                <li>Hair Color: {hairColor}</li> */}
            </ul>
        </div>
    </div>
    );
} 

export default Character;