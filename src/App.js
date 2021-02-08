import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character.js';
// import axios from 'axios';
import {data} from './mocks/handlers.js';


// const apiURL = 'https://swapi.dev/api/people/'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [char, setChar] = useState(data);
  
  
  // ******************************************************************************************
  // I HAD A CHALLENGING TIME GETTING MY API CALL TO MAP PROPERLY. I AM NOT SURE WHAT I WAS DOING WRONG
  // BUT AFTER MANY HOURS OF TRYING I COULDN"T STOP GETTING MY STATE VARIABLE "char" TO RETURN UNDEFINED.
  // THE CALL WOULD RECIEVE THE JSON OBJECT ON A SECOND ITERATION BUT THE FIRST WOULD ALWAYS COME BACK UNDEFINED
  // I AM ASSUMING THIS BROKE MY CODE BECAUSE MY char.map(....) METHOD ON LINE 49 WAS TRYING RENDER THE
  // CHARACTER COMPONENT WITH DATA THAT TECHNICALLY DIDN'T EXIST YET.  I DIDN"T WANT TO TURN IN AN EMPTY PROJECT
  // SO I JUST IMPORTED THE DATA FROM HANDLERS.JS TO USE BUT ANY FEEDBACK ON WHAT I WAS MISSING WOULD BE 
  // GREATLY APPRECIATED.  BELOW IS MY EFFECT HOOK AND AXIOS.GET.  I DID TRY PUTTING "char" IN THE DEPENDENCY ARRAY
  // BUT THAT WOULD SOMETIMES JUST CAUSE AN INFINITE LOOP.

  // useEffect(()=>{

    
  //   axios.get(apiURL)
    
    
  //   .then(res =>{
      
  //      setChar(res.data);
      
  //   })
  //   .catch(err=>{
  //     console.log(err.data);
  //   })

  // }, [])
  // console.log(char);
  
  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
          
      {char.map((charData)=> (<Character char={charData}/>))}
    </div>
  );
}

export default App;
