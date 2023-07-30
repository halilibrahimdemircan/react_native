import React from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';
import {useGlobalState} from '../Context/GlobalStateContext';
import {fetchData} from '../utils/fetchData';

const Logout: React.FC<{navigation: any}> = ({navigation}) => {
  const {userInfo, setUserInfo} = useGlobalState();
  const logoutFunc = async () => {
    console.log('Logout Func userInfo  :>> ', userInfo);
    const options = {
      email: userInfo.email,
      token: userInfo.token,
    };
    try {
      const result = await fetchData(
        'https://gapi.nftinit.io/api/logout/',
        'POST',
        options,
      );

      console.log('logout result :>> ', result);
      if (result.success && result.message == 'User logout') {
        setUserInfo((prevUserInfo: any) => ({
          ...prevUserInfo,
          email: '',
          token: '',
          error: '',
        }));
        navigation.navigate('LoginAndRegister', {userInfo});
      } else {
        Alert.alert('OOPS', result.error_message || 'Something went wrong', [
          {
            text: 'OK',
          },
        ]);
      }
    } catch (error: any) {
      Alert.alert('OOPS', error.message, [
        {
          text: 'OK',
        },
      ]);
    }
  };
  const logOut = () => {
    Alert.alert('OOPS', 'Are you sure you want to exit', [
      {
        text: 'OK',
        onPress: () => logoutFunc(),
      },
    ]);
  };
  return (
    <TouchableOpacity onPress={() => logOut()}>
      <Text>Logout</Text>
    </TouchableOpacity>
  );
};

export default Logout;
