import React,{useState} from 'react';
import {View,Text,StyleSheet,FlatList,Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem ';
import Add from './components/AddItem';
import uuid from 'uuidv4';
const app = () =>{
    const[items, setItems]=useState([
        {id:uuid(), text: 'meat'},
        {id:uuid(), text: 'water'},
        {id:uuid(), text: 'Bread'},
        {id:uuid(), text: 'Juice'},
    ]);

    const delItems= (id) =>{
        if(!text) {
Alert.alert('Error','Please enter an item',{text:'OK'});
        }else{
            setItems(prevItems => {
                return prevItems.filter(item => item.id != id);
            });
        }
       
    };
const add= (text) => {
    setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems];
    });
};

    return(
<View style={styles.container}>
<Header/>
<Add add={add}/>
<FlatList data={items}
 renderItem={({item})=>( <ListItem item={item} delItems={delItems}/>)} 
 />
</View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop:70,
    },
});
export default app;



