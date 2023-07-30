import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {useGlobalState} from '../../Context/GlobalStateContext';
import useFetch from '../../ios/hooks/UseFetch';
import {fetchData} from '../../utils/fetchData';
// type LoginPageProps = {
//   navigation: any;
//   // homePage: string;
//   // setHomePage: Dispatch<SetStateAction<string>>;
// };
const screenWidth = Dimensions.get('window').width;
const LoginAndRegisterScreen: React.FC<{navigation: any; route: any}> = ({
  navigation,
  route,
}) => {
  const {userInfo, setUserInfo} = useGlobalState();
  console.log('hello userInfo :>> ', userInfo);
  const [homePage, setHomePage] = useState('register');
  // password gizleme için kullanacağız
  const [isSecure, setIsSecure] = useState(false);
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

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
  const handleLoginAndRegister = async () => {
    const options = {
      email: userInput.email,
      password: userInput.password,
    };
    if (homePage == 'register') {
      const result = await fetchData(
        'https://gapi.nftinit.io/api/register/',
        'POST',
        options,
      );

      console.log('REGISTER result :>> ', result);
      if (result.success) {
        setUserInfo((prevUserInfo: any) => ({
          ...prevUserInfo,
          email: userInput.email,
          token: result.token,
          error: '',
        }));
        // setHomePage('login');
        navigation.navigate('Main', {userInfo});
      } else {
        setUserInfo((prevUserInfo: any) => ({
          ...prevUserInfo,
          email: '',
          token: '',
          error: result.error_message,
        }));
        Alert.alert('OOPS', result.error_message, [
          {
            text: 'OK',
          },
        ]);
      }
      // console.log('response :>> ', response);
    } else if (homePage == 'login') {
      fetchData('https://gapi.nftinit.io/api/login/', 'POST', options).then(
        result => {
          console.log('LOGIN result :>> ', result);
          if (result.success) {
            setUserInfo((prevUserInfo: any) => ({
              ...prevUserInfo,
              email: userInput.email,
              token: result.token,
              error: '',
            }));
            // setHomePage('login');
            navigation.navigate('Main', {userInfo});
          } else {
            setUserInfo((prevUserInfo: any) => ({
              ...prevUserInfo,
              email: '',
              token: '',
              error: result.error_message,
            }));
            Alert.alert('OOPS', result.error_message, [
              {
                text: 'OK',
              },
            ]);
          }
        },
      );
    }
  };

  console.log('LOGIN AND REGISTER userInfo :>> ', userInfo);
  useEffect(() => {
    // userInfo durumu değiştiğinde yapılacak işlemler
    console.log('userInfo updated:>> ', userInfo);
  }, [userInfo]);

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={styles.viewContainer}>
        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Mail"
          style={styles.textInput}
          onChangeText={text =>
            setUserInput(prevUserInput => ({...prevUserInput, email: text}))
          }
        />
        <TextInput
          autoCapitalize="none"
          keyboardType="visible-password"
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry={isSecure}
          onChangeText={text =>
            setUserInput(prevUserInput => ({...prevUserInput, password: text}))
          }
        />
        <CustomButton
          name={
            homePage == 'login'
              ? 'Login'
              : homePage == 'register'
              ? 'Register'
              : ''
          }
          border={true}
          backgroundColor="blue"
          color="white"
          onPressFunction={() => handleLoginAndRegister()}
        />
        {loginAndRegisterDecider()}
      </View>
    </SafeAreaView>
  );
};

export default LoginAndRegisterScreen;

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  textInput: {
    width: (screenWidth / 100) * 65,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 4,
    padding: 10,
  },
  errorText: {
    color: 'red',
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

  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
});
