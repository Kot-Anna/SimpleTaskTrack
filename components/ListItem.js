import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Color } from '../constants/const';

const ListItem = props => {
  return (
  <TouchableOpacity activeOpacity = {0.8} onLongPress={props.onDelete.bind(this, props.id)} onPress={props.onTouch.bind(this, props.myitem)}>
    <View style = {styles.list} >
    <Text style={styles.listtext}>{props.name}</Text>
    </View> 
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({


  list: {
    width: 300,
    maxWidth: '100%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: Color.purple,
    borderWidth: .5,
  },

  listtext: {
    color: Color.purple
  }
})

export default ListItem;