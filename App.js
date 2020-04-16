import * as React from 'react';
import { View ,Text} from 'react-native';
import { createAppContainer} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { TodayScreen, ReadLaterScreen, PowerSearchScreen, AddContentScreen, LoginScreen } from './src/app/components';
// import { StatusBar } from './src/app/components/ShareComponent/Statusbar/StatusBar'

const Tab = createBottomTabNavigator();

function TabsNavigator() {
  return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Today') {
            iconName = 'ios-paper';
          } else if (route.name === 'ReadLater') {
            iconName = 'ios-bookmarks';
          } else if (route.name === 'AddContent') {
            iconName = 'ios-add-circle'
          } else if ( route.name === 'PowerSearch') {
            iconName = 'ios-search'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Today" component={TodayScreen} />
        <Tab.Screen name="ReadLater" component={ReadLaterScreen} />
        <Tab.Screen name="AddContent" component={AddContentScreen}/>
        <Tab.Screen name="PowerSearch" component={PowerSearchScreen}/>
      </Tab.Navigator>
  );
}

const Drawers = createDrawerNavigator();

function App(){
  return (
    <NavigationContainer>
      <Drawers.Navigator>
        <Drawers.Screen name="Home" component={TabsNavigator}/>
        <Drawers.Screen name="Login" component={LoginScreen}/>
      </Drawers.Navigator>
    </NavigationContainer>
  )
}

export default App;;