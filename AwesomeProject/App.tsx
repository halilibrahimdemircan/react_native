/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import type {PropsWithChildren} from 'react';

import LoginAndRegisterScreen from './screens/Login/LoginAndRegisterScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/Main/MainScreen';
import {GlobalStateProvider} from './Context/GlobalStateContext';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <GlobalStateProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginAndRegister"
            component={LoginAndRegisterScreen}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{title: 'Main'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalStateProvider>
  );
}

export default App;
