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
import Login from './screens/Login/LoginPage';
import Register from './screens/Register/RegisterPage';
import CustomButton from './components/CustomButton';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const screenWidth = Dimensions.get('window').width;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [homePage, setHomePage] = useState('register');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.sectionContainer}>
      {/* <Touchable /> */}
      <View style={styles.buttonContainer}>
        <CustomButton
          name="Login"
          width={100}
          onPressFunction={() => setHomePage('login')}
        />
        <CustomButton
          name="Register"
          width={100}
          onPressFunction={() => setHomePage('register')}
        />
      </View>
      {homePage == 'login' ? <Login /> : 'register' ? <Register /> : ''}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  textInput: {
    width: (screenWidth / 100) * 65,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
});

export default App;
