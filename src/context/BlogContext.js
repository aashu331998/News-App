import createDataContext from "./createDataContext"
//import jsonServer from "../api/jasonServer";
import jasonServer from "../api/jasonServer";
import { AsyncStorage} from 'react-native';

const blogReducer=(state, action)=>{
switch(action.type) {

  case "get_apidata":
    return action.payload

    default:
  return state;
}
};

const getScreen1Data= dispatch=>{

  return async()=>{
   const response= await jasonServer.get("/get?type=json&category=4")
   //console.log(JSON.stringify(response.data));
  // await AsyncStorage.setItem('screen1Data', JSON.stringify(response.data));
 //console.log("1233333 4"+response.data.data[0].p_pages_id);
//await AsyncStorage.setItem('screen1Data',response.data.data);

  dispatch({type:"get_apidata", payload: response.data});
  };
};

const getScreen2Data= dispatch=>{

  return async()=>{
   const response= await jasonServer.get("/get?type=json&category=6")
   //console.log(JSON.stringify(response.data));
  await AsyncStorage.setItem('screen1Data', JSON.stringify(response.data))
        .then(json => console.log('success!'))
        .catch(error => console.log('error!'));
  dispatch({type:"get_apidata", payload: response.data});
  };
};
  
const getScreen3Data= dispatch=>{

  return async()=>{
   const response= await jasonServer.get("/get?type=json&category=10")
   //console.log(JSON.stringify(response.data));
  // await AsyncStorage.setItem('screen3Data', JSON.stringify(response.data));
  dispatch({type:"get_apidata", payload: response.data});
  };
};

const getScreen4Data= dispatch=>{

  return async()=>{
   const response= await jasonServer.get("/get?type=json&category=15")
   //console.log(JSON.stringify(response.data));
  // await AsyncStorage.setItem('screen4Data', JSON.stringify(response.data));
  dispatch({type:"get_apidata", payload: response.data});
  };
};

export const{Context, Provider}=createDataContext(
  blogReducer,
  {getScreen1Data,getScreen2Data,getScreen3Data,getScreen4Data},
   []
);