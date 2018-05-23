import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { Actions } from 'react-native-router-flux';



export default class PokeList extends React.Component {

    goToPokemon = () => {
        Actions.details()
      }


  render() {
   
    return (
      <View>
      
      
      
      <FlatList
        data={this.props.pokemon}
        renderItem={({ item }) => {
          return (
            
            <ListItem
              title={item.name}
              avatar={{ uri: item.imageUrl }}
              onPress={() =>{this.goToPokemon()}}
            />

            
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
</View>
      
    );
  }
}
