import React from 'react';
import {Pressable, Text, View} from 'react-native';
type ButtonProps = {
  name: string;
  onPressFunction?: () => void;
  width?: number;
  height?: number;
};

const CustomButton = (props: ButtonProps) => {
  const styles = {
    button: {
      borderWidth: 0.5,
      padding: 10,
      width: props.width,
      height: props.height,
    },
    buttonText: {},
  };
  return (
    <Pressable style={styles.button} onPress={props.onPressFunction}>
      <Text style={styles.buttonText}>{props.name}</Text>
    </Pressable>
  );
};

export default CustomButton;
