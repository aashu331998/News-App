
import React,{useContext, useEffect,Component } from "react"; 
import{View, Text, FlatList, Button, Image, StyleSheet, TouchableOpacity} from "react-native";
import {Context as Screen3Context} from "../src/context/BlogContext";
 

// export default class Screen1 extends Component {
  const Screen3=({navigation}) =>{
    
    const {state, getScreen3Data} = useContext(Screen3Context);

    useEffect(()=>{ 
      getScreen3Data(); 
    
      const listener=  navigation.addListener("didFocus",()=>{
        getScreen3Data(); 
        });
        return()=>{
            listener.remove();
        };
    },[])
    
    return (
        <View style={{backgroundColor:"#e5e5e5"}}>
{/* {console.log(JSON.stringify(state.data[1].p_pages_pictures)+"aAaaaaaaaaaaaaaaa")} */}
     <FlatList 
    data={state.data}
    keyExtractor={(blogPosts)=>blogPosts.title}
    renderItem={({item})=>{
        return(
        // <TouchableOpacity onPress={()=> navigation.navigate("Show",{id: item.id})}>
        <TouchableOpacity onPress={()=> navigation.navigate("ShowScreen",
        {title: item.p_pages_title,author: item.p_pages_author,
          date: item.p_pages_date,landez: item.p_pages_landez,
          pictures: item.p_pages_pictures,matan: item.p_pages_matan,})}>
        <View style={styles.row}>
          <Text style={{fontWeight:"bold",fontSize:18}}>{item.p_pages_title}</Text>
          {/* <Text style={{fontSize:10}}>{item.p_pages_author}</Text> */}
          <Text numberOfLines={1} style={{}}>
          {item.p_pages_landez.length < 58
                ? `${item.p_pages_landez}`
                : `${item.p_pages_landez.substring(0, 54)}...`}
            </Text>
            <Text style={{fontSize:10,marginTop:12}}>{item.p_pages_date}</Text>
        
        {/* <Image source={require('/userfiles/image/yateem.jpg')}  style={{width: 35, height: 35}}/>  */}
            </View>
        </TouchableOpacity>
        );
    }}
    />
</View>
    );
  }

 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
  row:{
    borderWidth:0.5,
    borderColor: "#cccccc",
    height:90,
    margin:5,
    marginBottom:-1,
    backgroundColor:"white",
    padding:10,
    flex:1
    },
    title:{
        fontSize: 18
    },
});


export default Screen3 ; 