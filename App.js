import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/Home'
import ServiceSchedule from './src/ServiceSchedule'
import SuccessStories from './src/SuccessStories';
import News from './src/News';
import Volunteers from './src/Volunteers';




const MainNavigator=createStackNavigator({
  Home: {screen:Home},
  ServiceSchedule:{screen:ServiceSchedule},
  SuccessStories:{screen:SuccessStories},
  News:{screen:News},
  Volunteers:{screen:Volunteers}
},{
  defaultNavigationOptions:{headerTintColor:"#fff",headerStyle:{backgroundColor:'#0b77ba'} 
}
})



const App=createAppContainer(MainNavigator);

export default App