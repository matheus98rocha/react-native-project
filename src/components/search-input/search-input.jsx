import React from 'react';
import {Text, TextInput, View} from 'react-native';

import styles from './search-input.styles';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchInput = () => {
  return (
    <View style={styles.wrapper}>
      <TextInput style={styles.input} placeholder="Search" />
      <MaterialCommunityIcons name="card-search" style={styles.icon} />
    </View>
  );
};

export default SearchInput;
