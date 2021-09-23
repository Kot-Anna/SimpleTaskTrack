import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Card from './Card';
import { Color } from '../constants/const';
import { editItem } from '../database/db';


const Edit = props => {

  let name = props.item.name;
  let due = props.item.due;
  let desc = props.item.desc;
  let id = props.item.id;

  const [itemName, setItemName] = useState('');
  const [itemDueDate, setItemDueDate] = useState('');
  const [itemDesc, setItemDesc] = useState('');
  const [itemId, setItemId] = useState('');

  useEffect(() => {
    setItemName(name);
    setItemDueDate(due);
    setItemDesc(desc);
    setItemId(id);
  }, [name, due, desc, id]);


  const itemNameHandler = (enteredText)=> {
    setItemName(enteredText);
  };
  const itemDueDateHandler = (enteredText)=> {
    setItemDueDate(enteredText);
  };
  const itemDescHandler = (enteredText)=> {
    setItemDesc(enteredText);
  };

  // UPDATING ITEM IN DATABASE
    const updateItemInDb = async (item) => {
      try {
      const dbResult = await editItem(item.id, item.name, item.due, item.desc);
    }
      catch(err){
      console.log("Error " + err)
    }
  };

  const updatedItemHandler = () => {
    if (itemName === "" || itemDueDate === "" || itemDesc === "") {
      Alert.alert(
        "Wrong input",
        "Fields cannot be empty",
        [{text: "Cancel"}]
      )
    } else {
      const thisItem = {id: itemId, name: itemName, due: itemDueDate, desc: itemDesc};
      updateItemInDb(thisItem);
      props.onUpdateItem();
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
              defaultValue={itemName}/>
            <TextInput 
              style={styles.input}
              title={itemDueDate}
              onChangeText={itemDueDateHandler}
              defaultValue={itemDueDate}/>
            <TextInput 
              style={styles.input}
              title={itemDesc}
              onChangeText={itemDescHandler}
              defaultValue={itemDesc}/>
          </View>
          <View style = {styles.btnwrapper}>
            <TouchableOpacity style = {styles.btnL} onPress={props.onModalClose}>
              <Text style = {styles.btntxt}>Cancel</Text><Text><AntDesign name="closecircle" size={20} color="white" /></Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.btnR} onPress={updatedItemHandler}>
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
  }

});

export default Edit;
