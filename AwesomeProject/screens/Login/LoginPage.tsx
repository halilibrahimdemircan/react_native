import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import CustomButton from '../../components/CustomButton';

const screenWidth = Dimensions.get('window').width;
const Login = () => {
  return (
    <SafeAreaView style={styles.viewContainer}>
      {/* <Text>Login</Text> */}
      <TextInput placeholder="Mail" style={styles.textInput} />
      <TextInput placeholder="Password" style={styles.textInput} />
      <CustomButton
        name="Login"
        border={true}
        backgroundColor="blue"
        color="white"
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'column',
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
    // marginTop: 20,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    // elevation: 2,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 4,
    padding: 10,
  },
});
