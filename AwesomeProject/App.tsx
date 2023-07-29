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

  const loginAndRegisterDecider = () => {
    if (homePage == 'login') {
      return (
        <View style={styles.infoTextContainer}>
          <Text>Don't have an account</Text>
          <TouchableOpacity onPress={() => setHomePage('register')}>
            <Text style={styles.boldText}>Register</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (homePage == 'register') {
      return (
        <View style={styles.infoTextContainer}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => setHomePage('login')}>
            <Text style={styles.boldText}>Login</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.sectionContainer}>
      {/* <Touchable /> */}
      {/* <View style={styles.buttonContainer}>
        <CustomButton
          name="Login"
          width={100}
          onPressFunction={() => setHomePage('login')}
          backgroundColor="gray"
          textAlign="center"
        />
        <CustomButton
          name="Register"
          width={100}
          onPressFunction={() => setHomePage('register')}
        />
      </View> */}
      {homePage == 'login' ? <Login /> : 'register' ? <Register /> : ''}
      {loginAndRegisterDecider()}
      {/* <View>
        <Text>Don't have an account</Text>
        <TouchableOpacity onPress={() => setHomePage('register')}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View> */}
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
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  boldText: {
    fontSize: 14,
    color: 'blue',
  },
  infoTextContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginTop: 20,
    // borderWidth: 1,
  },
});

export default App;
