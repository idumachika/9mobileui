/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/RegistrationScreen';
import BvnVerificationScreen from './src/screens/BvnVerificationScreen';
import SelectGender from './src/screens/SelectGender';
import PinLogin from './src/screens/PinLogin';



const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen} />
        <Stack.Screen
          name="Register"
          component={SignUpScreen} />
        <Stack.Screen
          name="BvnVerification"
          component={BvnVerificationScreen} />
        <Stack.Screen
          name="SelectGender"
          component={SelectGender} />
        <Stack.Screen
          name="Pinlogin"
          component={PinLogin} />
      </Stack.Navigator>

    </NavigationContainer>

  );
};



export default App;
