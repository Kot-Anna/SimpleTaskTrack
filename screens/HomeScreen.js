import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Color } from '../constants/const';


const HomeScreen = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.content}>
        <Text style = {styles.headertitle}>Welcome To The Task Tracker!</Text>
          <TouchableOpacity style = {styles.btnL} onPress={()=>{navigation.navigate('About')}}>
            <Text style = {styles.btnLtxt}>Read About</Text><Text><AntDesign name="questioncircle" size={20} color="white" /></Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.btnR} onPress={()=>{navigation.navigate('List')}}>
            <Text style = {styles.btnLtxt}>Create List</Text><Text><AntDesign name="checkcircle" size={20} color="white" /></Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    paddingVertical: 40
  },

  content: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headertitle: {
    color: Color.grey,
    fontSize: 20,
    textTransform: 'capitalize',
    textAlign: 'center',
    marginBottom: 30,
    width: '70%',
  },


  btnL: {
    width: 300,
    maxWidth: '100%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.teal,
    borderRadius: 5,
    elevation: 1,
    marginBottom: 10,
  },

  btnR: {
    width: 300,
    maxWidth: '100%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.purple,
    borderRadius: 5,
    elevation: 1,
  },

  btnLtxt: {
    color: Color.white,
    textTransform: 'uppercase',
  },

});
export default HomeScreen;
