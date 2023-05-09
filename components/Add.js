import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const Add = (addItem) =>{
    const [text,setText]=useState('');
    const onChange = (textValue) => setText(textValue);

    return(
<View>
    <TextInput placeholder='Add Item...' style={styles.input} onChangeText={onChange}/>
    <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}> 
    <Text style={styles.btnText}><Icon name="blus" size={20} /> Add Item</Text>

    </TouchableOpacity>

</View>

    );
};
const styles = StyleSheet.create({
 input:{
height:50,
padding:9,
fontSize:18,
 },
 btn:{
backgroundColor:'#c2bad5',
padding:8,
margin:4,
 },
 btnText:{
color:'blue',
fontSize:22,
textAlign:'center',
 },
});
export default Add;