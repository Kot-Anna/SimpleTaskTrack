import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Card from './Card';
import { Color } from '../constants/const';


const Input = props => {
  const [itemName, setItemName] = useState('');
  const [itemDueDate, setItemDueDate] = useState('');
  const [itemDesc, setItemDesc] = useState('');


  const itemNameHandler = (enteredText)=> {
    setItemName(enteredText);
  };
  const itemDueDateHandler = (enteredText)=> {
    setItemDueDate(enteredText);
  };
  const itemDescHandler = (enteredText)=> {
    setItemDesc(enteredText);
  };

  const addedItemHandler = () => {
    if (itemName === "" || itemDueDate === "" || itemDesc === "") {
      Alert.alert(
        "Wrong input",
        "Fields cannot be empty",
        [{text: "Cancel"}]
      )
    } else {
      //let addedItem = {name: {itemName}, due: {itemDueDate}, desc: {itemDesc}};
     // console.log(addedItem);
      props.onAddItem({name: itemName, due: itemDueDate, desc: itemDesc});
      setItemName('');
      setItemDueDate('');
      setItemDesc('');
      console.log("Input Parameters: " + itemName, itemDueDate, itemDesc);
    }
  };


  return (
    <Modal
      visible={props.visible}
      animationType="slide">
      <View style = {styles.container}>
        <Card style = {styles.card}>
          <View style = {styles.inputwrapper}>
            <TextInput 
              style={styles.input}
              title={itemName}
              onChangeText={itemNameHandler}
              placeholder="Task or Item name"/>
            <TextInput 
              style={styles.input}
              title={itemDueDate}
              onChangeText={itemDueDateHandler}
              placeholder="Due Date"/>
            <TextInput 
              style={styles.input}
              title={itemDesc}
              onChangeText={itemDescHandler}
              placeholder="Description"/>
          </View>
          <View style = {styles.btnwrapper}>
            <TouchableOpacity style = {styles.btnL} onPress={props.onModalClose}>
              <Text style = {styles.btntxt}>Cancel</Text><Text><AntDesign name="closecircle" size={20} color="white" /></Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.btnR} onPress={addedItemHandler}>
              <Text style = {styles.btntxt}>Add</Text><Text><AntDesign name="checkcircle" size={20} color="white" /></Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
  },

  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },

  btnwrapper: {
    width:'90%',
    justifyContent: "space-around",
    flexDirection: 'row',
    marginTop: 10
  },

  btnL: {
    width: '40%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.yellow,
    borderRadius: 5,
    elevation: 1,
    marginBottom: 10,
  },

  btnR: {
    width: '40%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.purple,
    borderRadius: 5,
    elevation: 1,
    marginBottom: 10,
  },

  btntxt: {
    color: Color.white,
    textTransform: 'uppercase',
  },
  inputwrapper: {
    width: '90%',
    justifyContent: 'flex-start',
    marginVertical: 20
  },

  input: {
    borderBottomColor: Color.grey,
    borderBottomWidth: 0.5,
    paddingTop: 20
  },

});

export default Input;
