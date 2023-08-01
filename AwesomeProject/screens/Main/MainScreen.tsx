import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Logout from '../../components/Logout';
import {useGlobalState} from '../../Context/GlobalStateContext';
import {fetchData} from '../../utils/fetchData';

const MainScreen: React.FC<{navigation: any; route: any}> = ({
  navigation,
  route,
}) => {
  const {userInfo, setUserInfo, setDungeons, dungeons} = useGlobalState();
  console.log('in main userInfo:>> ', userInfo);
  const getDungeons = async () => {
    const result = await fetch('https://gapi.nftinit.io/api/get_dungeons/', {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        userInfo: JSON.stringify({token: '123', user_id: 13, character_id: 1}),
      },
      // body: JSON.stringify(options),
    }).then(res => res.json());
    console.log('dungeons :>> ', result);
    if (result.success) {
      setDungeons(result.dungeon_list);
    }
  };
  useEffect(() => {
    getDungeons();

    return () => {};
  }, []);

  return (
    <View>
      <Logout navigation={navigation} />
      <Text>Main Screen</Text>
    </View>
  );
};

export default MainScreen;
