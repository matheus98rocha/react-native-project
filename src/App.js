import React from 'react';
import {ScrollView, View} from 'react-native';

import CardContainer from './components/card-container/card-container';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import SearchInput from './components/search-input/search-input';
import {globalStyles} from './styles/global.styles';

export function App() {
  return (
    <>
      <ScrollView style={globalStyles.container}>
        <Header userName={'Matheus Rocha'} />
        <SearchInput />
        <CardContainer />
      </ScrollView>
      <Menu />
    </>
  );
}
