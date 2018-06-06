import React, { Component } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { Actions } from 'react-native-router-flux';



export default class PokeList extends React.Component {


  render() {
   
    return (
      <View>
          <FlatList
            data={this.props.pokemon}
            renderItem={({ item, index }) => {
              return (
                <ListItem
                  title={item.name}
                  avatar={{ uri: item.imageUrl }}
                  onPress={() =>{this.props.goToPokemon(index)}}
                />
                
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
      </View>
      
    );
  }
}
