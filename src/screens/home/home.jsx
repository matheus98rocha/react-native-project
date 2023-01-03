import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {globalStyles} from '../../styles/global.styles';

import Header from '../../components/header/header';
import CardContainer from '../../components/card-container/card-container';
import SearchInput from '../../components/search-input/search-input';
export function Home() {
  return (
    <>
      <ScrollView style={globalStyles.container}>
        <Header userName={'Matheus Rocha'} />
        <SearchInput />
        <CardContainer />
      </ScrollView>
    </>
  );
}
