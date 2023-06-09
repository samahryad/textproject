import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';



const ListItem = ({item,delItem}) =>{

    return(
<TouchableOpacity style={styles.listItem}>
   <View style={styles.listItemView}></View>
   <Text style={styles.listItemText}>item.text</Text>
<Icon name="remove" size={20} color="firebrick" 
onPress={() => delItem(item.id)}/>
</TouchableOpacity>
    );
};
const styles = StyleSheet.create({
listItem:{
    padding:15,
    backgroundColor:'#f8f8f8',
    borderButtomWidth:1,
    borderColor:'#eee',

},
listItemView:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',

},

listItemText:{

fontSize:18,

},

});
export default ListItem;