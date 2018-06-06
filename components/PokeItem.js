import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
//import { Actions, Scene } from 'react-native-router-flux';

import RenderPoke from './RenderPoke.js';



export default class PokeItem extends React.Component {


  render() {
    console.log(this.props.current)
    return (
        <View>
            {this.props.pokemon.filter((findpokemon, index) => {
                return this.props.current === index;
            }).map((poke, index) => {
                return <RenderPoke
                            key={index}
                            name={poke.name}

                    />
            })
            })}
        </View>
      
    );
  }
}
