import logo from './logo.svg';
import React,{useEffect, useState} from 'react';
import './App.css';
import Country from './components/Country/Country';
import Add from './components/Add/Add'

function App() {
  const[countries,setCountries]=useState([]);
  const[addCountry,setAddCountry]=useState([]);

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data=>setCountries(data))
  },[])

  const handleAddCountry = (country) =>{
    const newAdd =[...addCountry,country];
    setAddCountry  (newAdd);
  }
  return (
    <div className="App">
      <h1>No of Countries:{countries.length}</h1>
      <h3>Country Added: {addCountry.length}</h3>
      <Add add={addCountry}></Add>
      <ul>
        {
          countries.map(country=> <Country country={country} handleAddCountry = {handleAddCountry} key={country.alpha3Code}></Country>)
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
