import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Logout from '../../components/Logout';
import {useGlobalState} from '../../Context/GlobalStateContext';

const MainScreen: React.FC<{navigation: any; route: any}> = ({
  navigation,
  route,
}) => {
  const {userInfo, setUserInfo} = useGlobalState();
  console.log('in main userInfo:>> ', userInfo);

  return (
    <View>
      <Logout navigation={navigation} />
      <Text>Main Screen</Text>
    </View>
  );
};

export default MainScreen;
