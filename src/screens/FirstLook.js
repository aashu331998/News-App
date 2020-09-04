import React, {useContext} from "react";
import{View, Text, FlatList, Button, Image, StyleSheet, TouchableOpacity} from "react-native";
// import {Context} from "../context/BlogContext";


const FirstLook=({navigation})=>{
return(<View>
<Text>FirstLook</Text>
        <TouchableOpacity
          onPress={()=>navigation.openDrawer()}
          >
        <Image source={require('../edit.jpeg')}  style={{width: 30, height: 30}}/> 
        </TouchableOpacity>

</View>);
};

FirstLook.navigationOptions =({navigation})=>{
    return{
        drawerLabel: 'Firstlook',
        drawerIcon: () => (
          <Image
          source={require('../edit.jpeg')}
            style={{width: 24, height: 24,}}
          />
        ),
                    
             
    };

};


export default FirstLook;