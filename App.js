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
import LoginScreen from './src/screens/Dasboard';
import SignUpScreen from './src/screens/NewPassword';
import PinLogin from './src/screens/Security&Privacy';



const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Register"
          options={{ headerShown: false }}
          component={SignUpScreen} />
        <Stack.Screen
          name="Pinlogin"
          options={{ headerShown: false }}
          component={PinLogin} />
      </Stack.Navigator>

    </NavigationContainer>

  );
};



export default App;
