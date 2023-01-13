import React from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../../styles/global.styles';

export function Profile({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Button
        title="Profile Screen - Go Back"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
