import React from 'react';
import { View, StyleSheet} from 'react-native';
import {Color} from '../constants/const'

const Card = props => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    // shadowColor: 'black',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.26,
    // shadowRadius: 6,
    // elevation: 1,
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10
  }
})

export default Card;
