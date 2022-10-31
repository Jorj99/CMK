import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Login = ({cb, text}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={cb}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Login;
