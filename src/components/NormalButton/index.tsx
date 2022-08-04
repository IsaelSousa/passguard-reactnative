import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styled} from './styles';

interface Props {
  text: string;
  onPress?: any;
}

const NormalButton = ({text, onPress}: Props) => (
  <TouchableOpacity onPress={onPress} style={styled.container}>
    <Text style={styled.text}>{text}</Text>
  </TouchableOpacity>
);

export default NormalButton;
