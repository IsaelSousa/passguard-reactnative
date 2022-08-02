import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {api} from '../../services/api';
import {styles} from './styles';

export const LoginScreen = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <Text style={styles.text}>Login</Text>
        <TextInput placeholder='Username' style={styles.textinput} />
        <TextInput placeholder='Password' style={styles.textinput} />
        <Button color={'#00d4ff'} title='Login Button' />
      </View>
    </View>
  );
};
