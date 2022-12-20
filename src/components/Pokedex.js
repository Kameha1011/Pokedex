import React, { Component } from 'react';
import '../stylesheets/Pokedex.css';
import pokeballIcon from '../images/pokeball_icon.png';
import Pokecard from './Pokecard';
const PokeApi = require("pokeapi-js-wrapper");
const customOptions = { cacheImages: true }
const P = new PokeApi.Pokedex(customOptions);
// from 387 to 493 4th gen pokemons

let allPokemonData = [];
const pokemonFinder = async (id) => {
    try {
       const data = await P.getPokemonByName(id);
        return data;
        
    } catch (error) {
        console.log(error);
    }
};
const getPkmnData = async (from, to) =>{ 
    try {
        for (let i = from; i <= to; i++) {
            const data = await pokemonFinder(i);
            let pokemonData = {};
            pokemonData.name = data.name;
            pokemonData.type = data.types[0].type.name;
            pokemonData.baseExp = data.base_experience;
            pokemonData.sprite = data.sprites.front_default;
            allPokemonData.push(pokemonData);
       }
       return allPokemonData;
    } catch (error) {
        console.log(error);
    }
};
getPkmnData(1,9);

const capitalizeFirstLetter = (word) => {
    const newWord = word.charAt(0).toUpperCase() + word.slice(1);
    return newWord
};
class Pokedex extends Component {
    render() {
        return (
            <div className='Pokedex'>
                  <h1><img className='Pokedex-icon' alt='Tittle Icon' src={pokeballIcon}></img>Pokedex </h1>
                  <div className='Pokecard-container'>
                    { allPokemonData.map( (pkmndata, index) => (
                        <Pokecard key={index}
                         name = { capitalizeFirstLetter(pkmndata.name) } 
                         type = { capitalizeFirstLetter(pkmndata.type) } 
                         baseExp = {pkmndata.baseExp} 
                         sprite = {pkmndata.sprite}
                        />
                    ) ) }
                  </div>
            </div>
        )
    }
}

// const pkmndataarr =[ 
// {
//     name: "Bulbasaur",
//     type: "Grass",
//     baseExp: 64,
//     sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
//   },
//   {
//     name: "Charmander",
//     type: "Water",
//     baseExp: 50,
//     sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
//   },
//   {
//     name: "Squirtle",
//     type: "Fire",
//     baseExp: 20,
//     sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
//   },
//   {
//     name: "Chikorita",
//     type: "Grass",
//     baseExp: 20,
//     sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
//   },
//   {
//     name: "Cyndaquil",
//     type: "Fire",
//     baseExp: 20,
//     sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png"
//   },
//   {
//     name: "Totodile",
//     type: "Water",
//     baseExp: 20,
//     sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png"
//   },
//   {
//     name: "Treecko",
//     type: "Grass",
//     baseExp: 20,
//     sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png"
//   },
//   {
//     name: "Torchic",
//     type: "Fire",
//     baseExp: 20,
//     sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png"
//   },
//   {
//     name: "Mudkip",
//     type: "Water",
//     baseExp: 20,
//     sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png"
//   },
//   {
//     name: "Turtwig",
//     type: "Grass",
//     baseExp: 20,
//     sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png"
//   },
//   {
//     name: "Chimchar",
//     type: "Fire",
//     baseExp: 20,
//     sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png"
//   },
//   {
//     name: "Piplup",
//     type: "Water",
//     baseExp: 20,
//     sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png"
//   }
// ]
export default Pokedex;