import React from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../../styles/global.styles';

export function Upload({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Button
        title="Upload Screen - Go Back"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
