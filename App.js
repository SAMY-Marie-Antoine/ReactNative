import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Register from './Register';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import firebase from 'firebase';
import Home from './Home';


const Tab = createMaterialTopTabNavigator();

export default function App() {

  var firebaseConfig = {
    apiKey: "AIzaSyBhQKs8XB4rx4WaBwK4kBFaTOHocNWR91w",
    authDomain: "projetreactnative-4ff0e.firebaseapp.com",
    projectId: "projetreactnative-4ff0e",
    storageBucket: "projetreactnative-4ff0e.appspot.com",
    messagingSenderId: "361837842803",
    appId: "1:361837842803:web:d5846d7a82dc40c7eef506"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  return (
    <View style={styles.container}>
      <StatusBar style={styles.barstyle} />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Login"
            component={Login}
            option={{ title: "Connexion" }} />
          <Tab.Screen
            name="Register"
            component={Register}
            option={{ title: "Inscription" }} />
            <Tab.Screen
            name="Home"
            component={Home}
            option={{ title: "Accueil" }} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  barstyle: {
    marginBottom: 20,
    height: 50,
    paddingTop: 20
  },
  text: {
    alignSelf: 'center'
  }
});

