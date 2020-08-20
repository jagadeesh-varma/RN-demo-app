import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Example from './screens/Example';

//Auth Stack navigation 

const AuthStack = createStackNavigator({
  Loading: {
      screen: Example,
      navigationOptions:{
        headerTitle:  'Loading',
      },
  },
  SignIn:{
      screen: Example,
      navigationOptions:{
        headerTitle: 'Sign In'
      }
  },
  CreateAccount: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Create Account",
    }
  },
  ForgotPassword: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Forgot Password'
    },
  },
  ResetPassword:{
    screen: Example,
    navigationOptions: {
      headerTitle: 'Reset Password',
    },
  },
});


//Stack Navigator for Each App Tab

const FeedStack = createStackNavigator({
  Feed: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Feed',
    },
  },
  Deatails: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Deatails',
    },
  },
});

const SearchStack = createStackNavigator({
  Search: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Search',
    },
  },
  Deatails: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Deatails',
    },
  },
});

const DiscoverStack = createStackNavigator({
  Discover: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Discover',
    },
  },
  Deatails: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Deatails',
    },
  },
});

//Settings Stack 
const SettingsStack = createStackNavigator({
  SettingsList: {
    screen: Example,
    navigationOptions:{
      headerTitle: 'Settings List',
    },
  },
  Profile: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Profile',
    },
  },
});

// App Tabs 

const MainTabs = createBottomTabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
    },  
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Search',
    },
  },
  Discover: {
    screen: DiscoverStack,
    navigationOptions: {
      tabBarLabel: 'Discover',
    },
  },
})



const MainDrawer = createDrawerNavigator({
  MainTabs: MainTabs,
  Settings: SettingsStack,
})



//.. Modal style 

const AppModalStack = createStackNavigator(
{
  App: MainDrawer,
  Promotion1: {
    screen: Example
  }
},
{
  mode: 'modal',
  headerMode: 'none'
}
);


const App = createSwitchNavigator({
  Loading: {
    screen: Example,
  },
  Auth: {
    screen: AuthStack,
  },
  App: {
    screen: AppModalStack,
  }
});

export default createAppContainer(App); 