import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const onClickHandler = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        console.log(response.data.results)
        setPokemon(response.data.results)
      })
      .catch(err => console.log(err))
      // .then(res => res.json())
      // .then(res => {
      //   console.log(res)
      //   setPokemon(res.results)
      // })
      // .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>Fetch a Pokemon</h1>
      <button onClick={onClickHandler}>click me</button>

      {
        pokemon.map((allPokes, i) => {
          return <li key={i}>{allPokes.name}</li>
        })
      }
    </div>
  );
}

export default App;
