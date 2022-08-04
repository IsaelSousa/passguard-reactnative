import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useGlobalContext} from '../../context/MessagePopupContext';
import {api} from '../../services/api';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TOKEN_KEY} from '../../services/auth';
import NormalButton from '../../components/NormalButton';
import {RootStackParamList} from '../../routes';
import {useNavigation} from '@react-navigation/native';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const LoginScreen = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const {setInitialized} = useGlobalContext();
  const navigation = useNavigation<HomeScreenProp>();

  const validateLogin = async () => {
    await api.post('user/login', {
      'username': username,
      'password': password,
    }).then((data: any) => {
      console.log(` Login Status: ${data.data.auth} `);
      if (data.data.auth === true) {
        setInitialized({
          active: false,
          message: 'Sucess',
          color: '#14be2b',
        });
        AsyncStorage.setItem(TOKEN_KEY, data.data.token);
        navigation.navigate('Home');
      }
    }).catch((error: any) => {
      console.log(error);
      throw error;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <Text style={styles.text}>PassGuard</Text>
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
        <NormalButton onPress={validateLogin} text='Login Button' />
      </View>
      <Text style={styles.footer}>Powered by @isaelsantos0</Text>
    </View>
  );
};
