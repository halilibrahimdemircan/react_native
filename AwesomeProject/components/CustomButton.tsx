import React from 'react';
import {Pressable, Text, View} from 'react-native';
type ButtonProps = {
  name: string;
  onPressFunction?: () => void;
  width?: number;
  height?: number;
  border?: boolean;
  backgroundColor?: string;
  textAlign?: string;
  color?: string;
};

const CustomButton = (props: ButtonProps) => {
  const styles = {
    button: {
      borderWidth: props.border ? 0.5 : 0,
      padding: 10,
      width: props.width,
      height: props.height,
      backgroundColor: props.backgroundColor,
      borderRadius: 5,
      //   textAlign: 'center',
      //   alignItems: 'center',
    },
    buttonText: {
      color: props.color == undefined ? 'black' : props.color,
      //   ,
      //   marginLeft: 80,
      //   borderWidth: 1,
      //   textAlign: 'center',
    },
  };
  return (
    <Pressable style={styles.button} onPress={props.onPressFunction}>
      <Text style={{...styles.buttonText, textAlign: 'center'}}>
        {props.name}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
