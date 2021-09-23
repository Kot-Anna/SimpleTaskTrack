import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Color } from '../constants/const';
import { AntDesign } from '@expo/vector-icons';

const BtnBack = (props) => {
  return (
      <View style = {styles.btnbackwrapper}>
        <TouchableOpacity style = {{...styles.btnback, ...props.style}} onPress={props.goBack}>
          <Text><AntDesign name="leftcircle" size={20} color="white" /></Text><Text style = {{...styles.btnbacktxt, ...props.style}}>Back</Text>
        </TouchableOpacity>
      </View>
  )
};

const styles = StyleSheet.create({

  btnbackwrapper: {
    width:'100%',
    justifyContent: "flex-start",
  },

  btnback: {
    maxWidth: '25%',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Color.yellow,
    borderRadius: 5,
    elevation: 1,
    marginBottom: 10,
  },

  btnbacktxt: {
    color: Color.white,
    textTransform: 'uppercase',
  }

});

export default BtnBack
