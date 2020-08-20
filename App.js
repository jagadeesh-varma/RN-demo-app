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
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Example from './screens/Example';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import Details from './screens/Details';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from './reducers';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client)));

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
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      headerTitle: 'Dashboard',
      /*headerShown: false,*/
    },
  },
  Details: {
    screen: Details,
    /*navigationOptions: {
      headerTitle: 'Deatails',
    },*/
  },
});

FeedStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

const SearchStack = createStackNavigator({
  Search: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Search',
    },
  },
  Details: {
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
  Details: {
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
      tabBarLabel: 'Shop',
      tabBarIcon:({tintColor})=>(  
          <Entypo name="shop" font="Entypo" color={tintColor} size={25}/>  
      )       
    },

  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Trendings',
      tabBarIcon:({tintColor})=>(  
          <Icon name='whatshot' color={tintColor} size={25}/>  
      )      
    },
  },
  Discover: {
    screen: DiscoverStack,
    navigationOptions: {
      tabBarLabel: 'Videos',
      tabBarIcon:({tintColor})=>(  
          <Icon name='subscriptions' color={tintColor} size={25}/>  
      )      
    },
  }
})


const customeDrawerComponent = (props) => (
  <SafeAreaView style={{flex:1}}>
    <View style={{height:150,alignItems:'center'}}>
      <Image 
        source={{uri: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjoresablount%2Ffiles%2F2019%2F08%2Funnamed-1200x1191.jpg'}}
        style={{width: 150, height: 150}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>)


const MainDrawer = createDrawerNavigator({
  MainTabs:{
    screen: MainTabs,
    navigationOptions:{
      title: "Home",
      drawerIcon:({tintColor}) => <Icon name="home" size={20} color={tintColor}/>
     }            
  },  
  Settings: {
    screen: SettingsStack,
    navigationOptions:{
      title: "Settings",
      drawerIcon:({tintColor}) => <Icon name="settings" size={20} color={tintColor}/>
     }            
  }
},{
  contentComponent: customeDrawerComponent
})



//.. Modal style 

const AppModalStack = createStackNavigator(
{
  App: MainDrawer,
  Promotion1: {
    screen: Example
  },
  Login: {
    screen: Login
  }
},
{
  mode: 'modal',
  headerMode: 'none'
}
);


const AppNavigator = createSwitchNavigator({  
  App: {
    screen: AppModalStack,
  },
  Loading: {
    screen: Example,
  },
  Auth: {
    screen: AuthStack,
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
} 