import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Color } from '../constants/const';
import Card from '../components/Card';
import BtnBack from '../components/BtnBack';
import Input from '../components/Input';
import ListItem from '../components/ListItem';
import { fetchItems, deleteItem, addItem } from '../database/db'
import { useIsFocused } from "@react-navigation/native";


const ListScreen = ({navigation}) => {

  const [itemList, setItemList] = useState([]);
  const [inAddMode, setInAddMode] = useState(false);
  const isFocused = useIsFocused();

  //CLOSING MODAL VIEW
  const closeModalHandler = () => {
    setInAddMode(false);
  }

  // NAVIGATE TO DETAIL SCREEN
  const Navigate = (myitem) => {
    navigation.navigate('Details', myitem);
  };

  // FETCH ITEMS FROM DB
  const getItems = async () => {
    try {
    const dbResult = await fetchItems();
    setItemList(dbResult.rows._array)
    } 
    catch(err) {
      console.log(err);
    }
    finally {
      console.log("Done reading");
    }
  }
  
  // CALLING FETCH ITEMS FROM USE EFFECT TO ALWAYS HAVE THEM UPDATED
  useEffect(() => {
    if (isFocused){
    getItems();}
  }, [isFocused]);


  // ADDING ITEM TO DATABASE
  const saveItemToDb = async (item) => {
    try {
      const dbResult = await addItem(item.name, item.due, item.desc);
    }
    catch(err){
      console.log("Error " + err)
    }
  };

  //ADDING ITEMS
  const addToListHandler = (item) => {
    saveItemToDb(item);
    getItems(); // fetching all items again and setting it with new one
    setInAddMode(false); //turning off the modal
  }

  // DELETING ITEMS
  const removeItemHandler =  (itemId) => {
    Alert.alert(
      "Deleting an Item",
      "Are you sure?",
      [
        {
          text: "Cancel",
          onPress: () => {return},
          style: "cancel"
        },
        { text: "Yes", onPress: () => {
          console.log("Deleting ID " + itemId);
          deleteItem(itemId); // DELETING FROM DATABASE
          setItemList (currentItems => {
          return currentItems.filter((item)=> item.id !== itemId);
         });
      }}
      ]
    );
  };

  return (
      <View style = {styles.container}>
        <Card style = {styles.content}>
          <BtnBack goBack = {()=>{navigation.goBack()}}/>
            <Text style = {styles.headertitle}>Create your own list!</Text>
            <TouchableOpacity style = {styles.btn} onPress={()=>{setInAddMode(true)}}>
              <Text style = {styles.btntxt}>Add Item</Text><Text><AntDesign name="pluscircle" size={20} color="white" /></Text>
            </TouchableOpacity>
            <Input visible={inAddMode} onAddItem={addToListHandler} onModalClose={closeModalHandler} />
            <FlatList 
            style = {styles.flatlist}
            keyExtractor={(item) => item.id.toString()}
            data={itemList} 
            renderItem={itemData => <ListItem id={itemData.item.id} myitem = {itemData.item} onDelete = {removeItemHandler} onTouch={Navigate} name={itemData.item.name}/>
          }/>
        </Card>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
  },

  content: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.purple
  },

  headertitle: {
    color: Color.grey,
    fontSize: 20,
    textTransform: 'capitalize',
    textAlign: 'center',
    marginVertical: 30,
    width: '70%',
  },


  btn: {
    width: 300,
    maxWidth: '100%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.purple,
    borderRadius: 5,
    elevation: 1,
    marginBottom: 20,
  },

  btntxt: {
    color: Color.white,
    textTransform: 'uppercase',
  },
  flatlist: {
    height: '60%'
  }

});

export default ListScreen
