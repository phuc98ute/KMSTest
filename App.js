import * as React from 'react';
import { View ,Text} from 'react-native';
import { Root } from "native-base";
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TodayScreen, ReadLaterScreen, PowerSearchScreen, AddContentScreen, LoginScreen, DetailNewsComponent } from './src/app/components';

const Tab = createBottomTabNavigator();
//use native base 2.13.8 for ios
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
        activeTintColor: 'blue',
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

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="Tabs" component={TabsNavigator}/>
      <Stack.Screen name="DetailNews" component={DetailNewsComponent} />
    </Stack.Navigator>
  );
}

const Drawers = createDrawerNavigator();

function App(){
  return (
    <NavigationContainer>
      <Drawers.Navigator>
        <Drawers.Screen name="Home" component={MyStack}/>
        <Drawers.Screen name="Login" component={LoginScreen}/>
      </Drawers.Navigator>
    </NavigationContainer>
  )
}

export default () =>
  <Root>
    <App/>
  </Root>;

