import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { Actions, Scene, Router } from 'react-native-router-flux';

//import Header from './components/Header.js';
import PokeList from './components/PokeList.js';
import PokeItem from './components/PokeItem.js';


const data = [
  {
    imageUrl: "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png",
    name: "Bulbasaur"
  },
  {
    imageUrl: "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png",
    name: "Charmander"
  },
  {
    imageUrl: "https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png",
    name: "Pikachu"
  },
  {
    imageUrl: "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png",
    name: "Squirtle"
  },
  {
    imageUrl: "https://cdn.bulbagarden.net/upload/thumb/3/3e/039Jigglypuff.png/250px-039Jigglypuff.png",
    name:"Jiggly Puff"
  },
  {
    imageUrl: "https://lph5i1b6c053kq7us26bdk75-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/ash-ketchum-facts-pokemon.jpg",
    name: "Ash Ketchum"
  },
  {
    imageUrl: "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png",
    name: "Bulbasaur"
  },
  {
    imageUrl: "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png",
    name: "Charmander"
  },
  {
    imageUrl: "https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png",
    name: "Pikachu"
  },
  {
    imageUrl: "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png",
    name: "Squirtle"
  },
  {
    imageUrl: "https://cdn.bulbagarden.net/upload/thumb/3/3e/039Jigglypuff.png/250px-039Jigglypuff.png",
    name:"Jiggly Puff"
  },
  {
    imageUrl: "https://lph5i1b6c053kq7us26bdk75-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/ash-ketchum-facts-pokemon.jpg",
    name: "Ash Ketchum"
  },
  {
    imageUrl: "https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png",
    name: "Pikachu"
  },
  {
    imageUrl: "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png",
    name: "Squirtle"
  },
  {
    imageUrl: "https://cdn.bulbagarden.net/upload/thumb/3/3e/039Jigglypuff.png/250px-039Jigglypuff.png",
    name:"Jiggly Puff"
  },
  {
    imageUrl: "https://lph5i1b6c053kq7us26bdk75-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/ash-ketchum-facts-pokemon.jpg",
    name: "Ash Ketchum"
  }
];



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: data,
      currentPoke: 0
    };
  }

  goToPokemon = (index) => {
    this.setState({currentPoke: index}, () => {
      Actions.refresh({currentPoke: this.state.currentPoke})
    })
  }


  render() {
   
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth" >
              <Scene  key="home" 
                      title="Pokemon" 
                      goToPokemon={this.goToPokemon}  
                      pokemon={this.state.pokemon} 
                      component={PokeList} 
                    />
              <Scene  key="details" 
                      title="Details" 
                      current={this.state.currentPoke} 
                      pokemon={this.state.pokemon} 
                      component={PokeItem} 
                    />
          </Scene>
        </Scene>
    </Router>

      
    );
  }
}
