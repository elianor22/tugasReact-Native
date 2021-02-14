/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Login from './src/Screens/Login/LoginScreen';
import Register from './src/Screens/Register/RegisterScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from './src/Screens/Dashboard/Dashboard';
import auth from '@react-native-firebase/auth';
import Maps from './src/Screens/Maps/Maps';
import History from './src/Screens/History/History'
import Laporan from './src/Screens/Laporan/Laporan';



const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      isLoggedIn: false,
    };
  }
  componentDidMount() {
    auth().onAuthStateChanged((userdata) => {
      console.log('user' + JSON.stringify(userdata));
      if (userdata === null) {
        this.setState({isLoggedIn: false});
      } else {
        this.setState({user: userdata, isLoggedIn: true});
      }
    });
    /* firestore()
      .collection('users')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
          console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        });
      });*/
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.state.isLoggedIn ? (
            <></>
          ) : (
            <Stack.Screen name="Login" component={Login} />
          )}
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Registration" component={Register} />
          <Stack.Screen name="Laporan" component={Laporan} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Maps" component={Maps} />

          {this.state.isLoggedIn ? (
            <Stack.Screen name="Login" component={Login} />
          ) : (
            <></>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
