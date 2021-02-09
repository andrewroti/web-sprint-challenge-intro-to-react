// Write your Character component here
import React from 'react';
import styled from 'styled-components';



const Character = (props)=>{

    const {char} = props;
    console.log(char.name);
    console.log(char);
    const StyledDiv = styled.div`
            margin:auto;
            margin-top: 5px;
            width: 35%;
            border-radius: 20px;
            color: #AB6B47;
            border-width: 5px;
            background-color: #C4D9EC;
            border: 3px solid #CAAA84;
           
    `;
    const StyledUl = styled.ul`
        text-align: left;
    
    `



    return (
    <StyledDiv>
        <h3>{char.name}</h3>
        <div className='info_container'>
            <StyledUl>
                <li>Name: {char.name}</li>
                <li>Gender: {char.gender}</li>
                <li>Birth Year: {char.birth_year}</li>
                <li>Eye Color: {char.eye_color}</li>
                <li>Hair Color:{char.hair_color}</li>
            </StyledUl>
        </div>
    </StyledDiv>
    );
} 

export default Character;