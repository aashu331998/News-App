import React, {useContext} from "react";
import{View, Text, FlatList, Button, Image, StyleSheet, TouchableOpacity} from "react-native";
// import {Context} from "../context/BlogContext";


class Dashboard extends React.Component {
render(){
    return(<View>
<Text>Dashboard </Text>
<TouchableOpacity
          onPress={()=>this.props.navigation.openDrawer()}
          >
        <Image source={require('../edit.jpeg')}  style={{width: 30, height: 30}}/> 
        </TouchableOpacity>

</View>);
}
static navigationOptions = {
    drawerLabel: 'Dashboard',
    drawerIcon: () => (
      <Image
      source={require('../edit.jpeg')}
        style={{width: 24, height: 24,}}
      />
    ),
  };

};



// Dashboard.navigationOptions =({navigation})=>{
//     return{
//         headerRight:<TouchableOpacity
//           onPress={()=>this.props.navigation.openDrawer}
//           >
//         <Image source={require('../edit.jpeg')}  style={{width: 30, height: 30}}/> 
//         </TouchableOpacity>
                
             
//     };

// };


export default Dashboard;