import { Component } from 'react';
import pokemonList from './data';
import Pokedex from './components/Pokedex';
import './App.css';

class App extends Component {
  render() {
    return (
      <Pokedex pokemonList={ pokemonList } />
    );
  }
}
export default App;
