import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useGlobalContext} from '../../context/MessagePopupContext';
import {api} from '../../services/api';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TOKEN_KEY} from '../../services/auth';

type RootStackParamList = {

}

type Props = NativeStackScreenProps<RootStackParamList>

export const LoginScreen = ({route, navigation}: Props) => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const {setInitialized} = useGlobalContext();

  const validateLogin = async () => {
    await api.post('user/login', {
      'username': username,
      'password': password,
    }).then((data: any) => {
      if (data.data.auth === true) {
        setInitialized({
          active: false,
          message: 'Sucess',
          color: '#14be2b',
        });
        AsyncStorage.setItem(TOKEN_KEY, data.data.token);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <Text style={styles.text}>Login</Text>
        <TextInput
          onChangeText={(e: any) => setUsername(e)}
          value={username}
          placeholder='Username'
          style={styles.textinput} />
        <TextInput
          onChangeText={(e: any) => setPassword(e)}
          value={password}
          placeholder='Password'
          style={styles.textinput} />
        <Button
          onPress={validateLogin}
          color={'#00d4ff'}
          title='Login Button' />
      </View>
    </View>
  );
};
