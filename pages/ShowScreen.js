import React, {useContext} from "react";
import{View, Text, FlatList, Button, Image, StyleSheet, TouchableOpacity} from "react-native";
import {Context} from "../src/context/BlogContext";
import { ScrollView } from "react-native-gesture-handler";


const ShowScreen=({navigation})=>{
navigation.getParam('title');
navigation.getParam('author');
navigation.getParam('date');
navigation.getParam('landez');
navigation.getParam('pictures');
navigation.getParam('matan');
// if(navigation.getParam('pictures')){
//    const img=navigation.getParam('pictures').slice(navigation.getParam('pictures').indexOf("src=")+5, 
//    navigation.getParam('pictures').indexOf(".jpg")+4)
//    console.log(img);
// }

if(navigation.getParam('pictures')!=null&&navigation.getParam('pictures').includes("src=")){

return( <View style={{padding:5,flex:1}}>
    <ScrollView>
<Text style={{fontWeight:"bold",fontSize:17,paddingTop:5}}>{navigation.getParam('title')} </Text>
<Text style={{}}>{navigation.getParam('author')}</Text>
<Text style={{}}>{navigation.getParam('date')}</Text>
<Text style={{paddingTop:20}}>{navigation.getParam('landez')}</Text>
<Text style={{}}>{navigation.getParam('matan')}</Text>
<Image
          style={{width: 200, height: 200,alignSelf:"flex-end"}}
          source={{uri: `https://taleemulislam.net${navigation.getParam('pictures').slice(navigation.getParam('pictures').indexOf("src=")+5, 
          navigation.getParam('pictures').indexOf(".jpg")+4)}`}}
        />
        </ScrollView>
</View>);}
else{
    return( <View style={{padding:5,flex:1}}>
        <ScrollView>
    <Text style={{fontWeight:"bold",fontSize:17,paddingTop:5}}>{navigation.getParam('title')} </Text>
    <Text style={{}}>{navigation.getParam('author')}</Text>
    <Text style={{}}>{navigation.getParam('date')}</Text>
    <Text style={{paddingTop:20}}>{navigation.getParam('landez')}</Text>
    <Text style={{}}>{navigation.getParam('matan')}</Text>
    {/* <Image
              style={{width: 200, height: 200,alignSelf:"flex-end"}}
              source={{uri: `https://taleemulislam.net${navigation.getParam('pictures').slice(navigation.getParam('pictures').indexOf("src=")+5, 
              navigation.getParam('pictures').indexOf(".jpg")+4)}`}}
            /> */}
            </ScrollView>
    </View>);
}
};

ShowScreen.navigationOptions =({navigation})=>({
    headerStyle: {
        backgroundColor: '#b1c6b9',
        //header color
      }
});


export default ShowScreen;