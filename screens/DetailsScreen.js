import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Color } from '../constants/const';
import Edit from '../components/Edit'

const DetailsScreen = ({route, navigation}) => {

  const [inEditMode, setInEditMode] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState('');
  //const [itemToDisplay, setItemToDisplay] = useState();

  let { id, name, due, desc } = route.params;
  const myItem = route.params;

    // NAVIGATE TO DETAIL SCREEN
    const Navigate = () => {
      navigation.navigate('List');
    };
  

  //CLOSING MODAL EDIT VIEW
    const closeModalHandler = () => {
      setInEditMode(false);
    }

  // OPENING THE MODAL
  const enterEditMode =(item)=>{
    setItemToUpdate(item)
    setInEditMode(true)
  };


  //CLOSING MODAL AND NAVIGATING TO LIST AFTER EDITION
  const editListHandler = () => {
    setInEditMode(false); //turning off the modal
    Navigate();
  };

 
  return (
  <View style = {styles.container}>
    <View style = {styles.header}>
      <Text style = {styles.headertitle}>Item's Details</Text>
    </View>
    <View style = {styles.card}>
      <Text style={styles.title}>Your item:</Text> 
      <Text>{name}</Text>
      <Text style={styles.title}>Due Date:</Text> 
      <Text>{due}</Text>
      <Text style={styles.title}>Description:</Text> 
      <Text>{desc}</Text>
      <TouchableOpacity style = {styles.btn} onPress={()=>enterEditMode(myItem)}>
        <Text style = {styles.btntxt}>Edit Item</Text><Text><MaterialCommunityIcons name="pencil-circle" size={20} color="white" /></Text>
      </TouchableOpacity>
      <Edit visible={inEditMode} item={itemToUpdate} onUpdateItem={editListHandler} onModalClose={closeModalHandler} />
    </View>
  </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignContent: 'center',
    paddingHorizontal: 50
  },

  card: {
    borderWidth: 0.3,
    borderRadius: 5,
    borderColor: Color.teal,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20
  },

  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  headertitle: {
    color: Color.grey,
    fontSize: 20,
    textTransform: 'capitalize',
    textAlign: 'center',
    marginVertical: 15,
    width: '70%',
  },

  title: {
    fontSize: 16,
    color: Color.teal,
    textTransform: 'uppercase',
    marginTop: 10
  },

  btn: {
    marginTop: 20,
    maxWidth: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.teal,
    borderRadius: 5,
    elevation: 1,
  },

  btntxt: {
    color: Color.white,
    textTransform: 'uppercase',
  },

});

export default DetailsScreen;
