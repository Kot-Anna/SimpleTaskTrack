import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import { Color } from '../constants/const';
import BtnBack from '../components/BtnBack';

const AboutScreen = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <Card style = {styles.card}>
        <BtnBack goBack = {()=>{navigation.goBack()}}/>
        <View style = {styles.imgwrapper}>
          <Image source={require('../assets/img/cat.jpg')}
          style={styles.img} resizeMode='cover'/>
        </View>
        <View  style = {styles.linewrapper}>
          <Text style = {styles.title}>Author:</Text><Text style = {styles.txt}>Anna Kot</Text>
        </View>
        <View  style = {styles.linewrapper}>
          <Text style = {styles.title}>Purpose:</Text><Text style = {styles.txt}>Make all sort of lists and track the completion!</Text>
        </View>
        <View  style = {styles.linewrapper}>
          <Text style = {styles.title}>Version:</Text><Text style = {styles.txt}>1.0</Text>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
  },

  card: {
    borderColor: Color.yellow,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },

  imgwrapper: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: Color.yellow,
    marginVertical: 20
  },

  img: {
    height: '100%',
    width: '100%',
  },

  linewrapper: {
    flexDirection: 'row',
    width: 300,
    maxWidth: '100%',
    height: '10%',
    marginVertical: 10,
    justifyContent: 'flex-start',
  },

  title: {
    textTransform: 'uppercase',
    width: '25%',
    color: Color.yellow,
    marginRight: 10
  },

  txt: {
    width: '75%',
  },

  btnbackwrapper: {
    width:'100%',
    justifyContent: "flex-start",
  },

  btnback: {
    width: 100,
    maxWidth: '30%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default AboutScreen;
