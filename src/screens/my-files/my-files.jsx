import React from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../../styles/global.styles';
import myFilesStyles from './my-files.styles';

export function MyFiles({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Button
        title="My Folder Screen - Go Back"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
