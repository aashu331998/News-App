import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,SafeAreaView,ScrollView,Dimensions,Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import Screen4 from './pages/Screen4';
import ShowScreen from './pages/ShowScreen';
 
import CustomSidebarMenu from './CustomSidebarMenu';
import {Provider as BlogProvider } from "./src/context/BlogContext";


class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer (icon at the left)
  toggleDrawer = () => {
    //Props to open/close the drawer on TouchableOpacity
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 27, height: 27, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
     // title: 'ترجمه او تفس',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight:<Text style={{color:'black',fontSize:20, paddingRight:15}}>ترجمه او تفس</Text>,
      headerStyle: {
        backgroundColor: '#b1c6b9',
        //header color
      },
      headerTintColor: 'white',
      //header text
    }),},
    ShowScreen:ShowScreen
});
 
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
//      title: 'مشکاة المصابیح',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight:<Text style={{color:'black',fontSize:20, paddingRight:15}}>مشکاة المصابیح</Text>,
      headerStyle: {
        backgroundColor: '#b1c6b9',
      },
      headerTintColor: 'white',
    }),
  },
});
 
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      //title: 'فقه معلومات ',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight:<Text style={{color:'black',fontSize:20, paddingRight:15}}>فقه معلومات </Text>,
      headerStyle: {
        backgroundColor: '#b1c6b9',
      },
      headerTintColor: 'white',
    }),
  },
});
 
const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Forth: {
    screen: Screen4,
    navigationOptions: ({ navigation }) => ({
      //title: 'فقه معلومات ',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight:<Text style={{color:'black',fontSize:20, paddingRight:15}}>حکايات</Text>,
      headerStyle: {
        backgroundColor: '#b1c6b9',
      },
      headerTintColor: 'white',
    }),
  },
});
const DrawerNavigatorExample = createDrawerNavigator({
  //drawerLabel: <View style={{height:100}}><Text>ترجمه او تفس</Text></View>,
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      // drawerLabel: 'ترجمه او تفس ',
      drawerLabel:<View style={{height:60, flex:1, alignItems:"center",flexDirection:"row"}}><Text style={{ flex:1, fontSize:20,paddingRight:15}} >ترجمه او تفس</Text></View>,
      drawerIcon: () => (
        <Image
        source={require('./image/add.png')}
          style={{width: 24, height: 24,}}
        />
      )
    },
  },
  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel:<View style={{height:60, flex:1, alignItems:"center",flexDirection:"row"}}><Text style={{ flex:1, fontSize:20,paddingRight:15}} >مشکاة المصابی</Text></View>,
     drawerIcon: () => (
        <Image
        source={require('./image/add.png')}
          style={{width: 24, height: 24,}}
        />
      )
    },
  },
  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel:<View style={{height:60, flex:1, alignItems:"center",flexDirection:"row"}}><Text style={{ flex:1, fontSize:20,paddingRight:15}} >فقه معلومات </Text></View>,
      drawerIcon: () => (
        <Image
        source={require('./image/add.png')}
          style={{width: 24, height: 24,}}
        />
      )
    },
  },
  Screen4: {
    //Title
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel:<View style={{height:60, flex:1, alignItems:"center",flexDirection:"row"}}><Text style={{ flex:1, fontSize:20,paddingRight:15}} >حکايات</Text></View>,
      drawerIcon: () => (
        <Image
        source={require('./image/add.png')}
          style={{width: 24, height: 24,}}
        />
      )
    },
  },
}, {
  //For the Custom sidebar menu we have to provide our CustomSidebarMenu
//   contentComponent: CustomSidebarMenu,
   drawerWidth: Dimensions.get('window').width - 120,
}

);
//export default createAppContainer(DrawerNavigatorExample);
const App= createAppContainer(DrawerNavigatorExample);

export default ()=>{
    return<BlogProvider>
    <App/>
    </BlogProvider>
    };