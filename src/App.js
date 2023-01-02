import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import CardContainer from './components/card-container/card-container';
import Header from './components/header/header';
import SearchInput from './components/search-input/search-input';

export function App() {
  return (
    <ScrollView style={styles.container}>
      <Header userName={'Matheus Rocha'} />
      <SearchInput />
      <CardContainer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8e6e6',
    flex: 1,
    padding: 20,
  },
});
