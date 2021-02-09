import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character.js';
import axios from 'axios';
// import {data} from './mocks/handlers.js';


const apiURL = 'https://swapi.dev/api/people'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [char, setChar] = useState([]);
  
  


  useEffect(()=>{
     axios.get(apiURL)
    .then(res =>{
       setChar(res.data);
       console.log(res.data[1].name);
      
    })
    .catch(err=>{
      console.log(err.data, "ERROR");
    })

  }, [])
  console.log(char);
  // axios.get(apiURL)
  // .then(res =>{
  //   setChar(res.data);
  //   console.log(res.data);
  // })
  // .catch(err=>{
  //   console.log(err.data, "ERROR");
  // })
  // console.log(char);

  
  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
          {/* <Character char={char}/> */}
      {char.map((charData)=> (<Character char={charData} key={charData.name}/>))}
    </div>
  );
}

export default App;
