import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../../styles/global.styles';
import styles from './login.styles';

export function Login({navigation}) {

  return (
    <View style={globalStyles.container}>
      <View style={styles.wrapper}>
        <Button title="Login" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
}
