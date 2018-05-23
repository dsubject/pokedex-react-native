import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
//import { Actions, Scene } from 'react-native-router-flux';





export default class RenderPoke extends React.Component {


  render() {
   
    return (
        <View>
            <Text>{this.props.name}</Text>
        </View>
      
    );
  }
}
