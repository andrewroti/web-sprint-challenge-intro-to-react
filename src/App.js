import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character.js';
import axios from 'axios';
import {data} from './mocks/handlers.js';

// const count = 0;
const apiURL = 'https://swapi.dev/api/people/1/'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [char, setName] = useState(data);
  const [gender, setGender] = useState();
  const [hairColor, setHairColor] = useState();
  const [eyeColor, setEyeColor] = useState();
  const [birthYear, setBirthYear] = useState();
  

  // useEffect(()=>{

    
  //   axios.get(apiURL)
    
    
  //   .then(res =>{
      
  //     setName(res.data.name);
  //     setGender(res.data.gender);
  //     setBirthYear(res.data.birth_year);
  //     setEyeColor(res.data.eye_color);
  //     setHairColor(res.data.hair_color);
      
  //   })
  //   .catch(err=>{
  //     console.log(err.data);
  //   })

  // }, [])
  
  
  
  

  // const getChar = data =>{
  //   const count = 0;
  //   const apiURL = `https://swapi.dev/api/people/${count}/`

  //   let addChar = char.map()
  // }

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
          
      {char.map((charData)=> (<Character char={charData}/>))}
    </div>
  );
}

export default App;
