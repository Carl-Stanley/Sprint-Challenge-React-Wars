import React, {useState,useEffect} from "react";
import './App.css';
import axios from "axios";
import Card from './components/Card' 



const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData]= useState([]);
  useEffect( () => {   

    axios.get('https://swapi.co/api/people/')
    .then( response => {
      
      setData(response.data.results); 
     
      //console.log(response.data.results)

    })  
    .catch(error => console.log('You got an error.', error))
  }, []);

 
  return ( 

    <div className="cards">            
      
        {data.map(key=><Card props={key}/>)}
                   
    </div>    
  );
}

export default App;
