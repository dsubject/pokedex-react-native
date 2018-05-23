import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
//import { Actions, Scene } from 'react-native-router-flux';

import RenderPoke from './RenderPoke.js';



export default class Details extends React.Component {


  render() {
   
    return (
        <View>
            {this.props.pokemon.filter((findpokemon, i) => {
                return this.props.current === i;
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
