// Write your Character component here
import React from 'react';



const Character = (props)=>{

    const {charName, gender} = props;

    return(
    <div>
        <h3>My name is: {charName}</h3>
        <div>And I am a: {gender}</div>
    </div>
    );
} 

export default Character;