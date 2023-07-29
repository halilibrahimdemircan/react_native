/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './screens/Login/LoginAndRegisterScreen';
import Register from './screens/Register/RegisterPage';
import CustomButton from './components/CustomButton';
import LoginAndRegisterScreen from './screens/Login/LoginAndRegisterScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/Main/MainScreen';
// import MainScreen from './screens/Main/MainScreen';

const Stack = createNativeStackNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer>
      {/* <LoginAndRegisterScreen /> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LoginAndRegisterScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//
// });

export default App;
